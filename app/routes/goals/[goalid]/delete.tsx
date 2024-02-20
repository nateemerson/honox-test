import { createRoute } from 'honox/factory'

export default createRoute(async (c) => {
  const goalId = c.req.param('goalid')
  const deleted = await c.env.MY_D1_DB.prepare(
    "DELETE FROM Goals WHERE GoalId = ?;"
  )
    .bind(goalId)
    .run()

  console.log('IN [goalid]/delete.tsx DELETE')
  console.log(deleted)
  return c.redirect('/goals')
})
