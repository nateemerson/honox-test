import { createRoute } from 'honox/factory'
import type { Goal } from '../../../global.d.ts'

export const POST = createRoute(async (c) => {
  const { GoalId, GoalName } = await c.req.parseBody<{GoalId: string, GoalName: string}>()
  const info = await c.env.MY_D1_DB.prepare(
    "UPDATE Goals SET GoalName = ? WHERE GoalId = ?;"
  )
  .bind(GoalName, GoalId)
  .run()
  return c.redirect(`/goals/${GoalId}/edit`)
})

export default createRoute(async (c) => {
  const goalId = c.req.param('goalid')
  const goal: Goal | null = await c.env.MY_D1_DB.prepare(
    "SELECT * FROM Goals WHERE GoalId = ?;"
  )
    .bind(goalId)
    .first()

  if (!goal)
    return c.render(<div><h1>Goal Not Found</h1></div>)

  return c.render(
    <div>
      <h1>Editing: {goal.GoalName}</h1>
      <form method="POST">
        <input type="hidden" name="GoalId" value={goal.GoalId} />
        <input type="text" name="GoalName" value={goal.GoalName} />
        <input type="submit" />
      </form>
      <a href="/goals">Back to Goals</a>
    </div>,
    { title: 'Goals' }
  )
})
