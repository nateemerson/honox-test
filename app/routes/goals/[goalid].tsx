import { createRoute } from 'honox/factory'
import type { Goal } from '../../global.d.ts'

export default createRoute(async (c) => {
  const goalId = c.req.param('goalid')
  const goal: Goal | null = await c.env.MY_D1_DB.prepare(
    "SELECT * FROM Goals WHERE GoalId = ?;"
  )
    .bind(goalId)
    .first()

  return c.render(
    <div>
      { goal ? <>
        <h1>{goal.GoalName}</h1>
        <p>Goal Id: {goal.GoalId}</p>
      </> : <>
          <h1>Goal not found</h1>
      </>}
      <a href="/goals">Back to Goals</a>

    </div>,
    { title: 'Goals' }
  )
})
