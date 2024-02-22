import { createRoute } from 'honox/factory'

export default createRoute(async (c) => {
  const id = c.req.param('id')
  const deleted = await c.env.MY_D1_DB.prepare(
    "DELETE FROM goal WHERE id = ?;"
  )
    .bind(id)
    .run()

  console.log('IN [goalid]/delete.tsx DELETE')
  console.log(deleted)
  return c.redirect('/goals')
})
