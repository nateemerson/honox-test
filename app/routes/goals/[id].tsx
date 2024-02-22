import { createRoute } from 'honox/factory'
import type { Goal } from '../../global.d.ts'

export default createRoute(async (c) => {
  const id = c.req.param('id')
  const goal: Goal | null = await c.env.MY_D1_DB.prepare(
    "SELECT * FROM goal WHERE id = ?;"
  )
    .bind(id)
    .first()

  return c.render(
    <div>
      { goal ? <>
        <h1>{goal.name}</h1>
        <p>Goal Id: {goal.id}</p>
      </> : <>
          <h1>Goal not found</h1>
      </>}
      <a href="/goals">Back to Goals</a>

    </div>,
    { title: 'Goals' }
  )
})
