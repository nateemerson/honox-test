import { createRoute } from 'honox/factory'
import type { Goal } from '../../../global.d.ts'

export const POST = createRoute(async (c) => {
  const { id, name } = await c.req.parseBody<{id: string, name: string}>()
  const info = await c.env.MY_D1_DB.prepare(
    "UPDATE goal SET name = ? WHERE id = ?;"
  )
  .bind(name, id)
  .run()
  return c.redirect(`/goals/${id}/edit`)
})

export default createRoute(async (c) => {
  const id = c.req.param('id')
  const goal: Goal | null = await c.env.MY_D1_DB.prepare(
    "SELECT * FROM goal WHERE id = ?;"
  )
    .bind(id)
    .first()

  if (!goal)
    return c.render(<div><h1>Goal Not Found</h1></div>)

  return c.render(
    <div>
      <h1>Editing: {goal.name}</h1>
      <form method="POST">
        <input type="hidden" name="id" value={goal.id} />
        <input type="text" name="name" value={goal.name} />
        <input type="submit" />
      </form>
      <a href="/goals">Back to Goals</a>
    </div>,
    { title: 'Goals' }
  )
})
