import { createRoute } from 'honox/factory'
import type { Goal } from '../../../global.d.ts'

export default createRoute(async (c) => {
  const goalId = c.req.param('goalid')
  const goal: Goal | null = await c.env.MY_D1_DB.prepare(
    "SELECT * FROM Goals WHERE GoalId = ?;"
  )
    .bind(goalId)
    .first()
  return c.render(
    <div>
      <h1>{ goal ? `Editing: ${goal.GoalName}` : 'No Goal Found'}</h1>
    </div>,
    { title: 'Goals' }
  )
})
