import { css } from 'hono/css'
import { createRoute } from 'honox/factory'

const className = css`
  font-family: sans-serif;
`

export const POST = createRoute(async (c) => {
  const { name } = await c.req.parseBody<{name: string}>()
  const info = await c.env.MY_D1_DB.prepare(
    "INSERT INTO Goals (GoalName) VALUES (?);"
  )
  .bind(name)
  .run()
  console.log(`New Goal added: ${info}`)
  console.log(info)
  return c.redirect('/goals')
})

export default createRoute((c) => {
  return c.render(
    <div class={className}>
      <h1>Goals</h1>
      <ul>
        <li>Goal 1</li>
      </ul>

      <form method="POST">
        <input type="text" name="todo" />
        <input type="submit" />
      </form>
    </div>,
    { title: 'Goals' }
  )
})
