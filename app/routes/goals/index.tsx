import { css } from 'hono/css'
import { createRoute } from 'honox/factory'

const className = css`
  font-family: sans-serif;
`
export const POST = createRoute(async (c) => {
  const { name } = await c.req.parseBody<{name: string}>()
  const info = await c.env.MY_D1_DB.prepare(
    "INSERT INTO goal (name) VALUES (?);"
  )
  .bind(name)
  .run()
  return c.redirect('/goals')
})

export default createRoute(async (c) => {
  const results: D1Result = await c.env.MY_D1_DB.prepare(
    "SELECT * FROM goal;"
  ).all()

  return c.render(
    <div class={className}>
      <h1>Goals</h1>
      <ul>
        {results.results.map((goal: any) =>
          <li>
            <a href={`/goals/${goal.id}`}>
              {goal.name}
            </a>{' '}
            (<a href={`/goals/${goal.id}/edit`}>Edit</a>)
            <form method="GET" action={`/goals/${goal.id}/delete`}>
              <input type="submit" value="Delete" />
            </form>
          </li>
        )}
      </ul>

      <form method="POST">
        <input type="text" name="name" />
        <input type="submit" />
      </form>
    </div>,
    { title: 'Goals' }
  )
})
