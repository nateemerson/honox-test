import { css } from 'hono/css'
import { createRoute } from 'honox/factory'

const className = css`
  font-family: sans-serif;
`

export const POST = createRoute(async (c) => {
  console.log(c.env)
  const { todo } = await c.req.parseBody<{todo: string}>()
  const info = await c.env.MY_D1_DB.prepare(
    "INSERT INTO Goals (GoalName) VALUES (?);"
  )
  .bind(todo)
  .run()
  console.log(`New Goal added: ${info}`)
  console.log(info)
  return c.redirect('/goals')
})

export default createRoute(async (c) => {
  const results: D1Result = await c.env.MY_D1_DB.prepare(
    "SELECT * FROM Goals;"
  ).all()
  return c.render(
    <div class={className}>
      <h1>Goals</h1>
      <ul>
        {results.results.map((goal: any) => <li>{goal.GoalName}</li>)}
      </ul>

      <form method="POST">
        <input type="text" name="todo" />
        <input type="submit" />
      </form>
    </div>,
    { title: 'Goals' }
  )
})
