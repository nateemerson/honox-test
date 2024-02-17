import { jsxRenderer } from 'hono/jsx-renderer'

export default jsxRenderer(({ children, title, Layout }) => {
  return (
    <Layout title={title}>
      <h1>Goals</h1>
      {children}
    </Layout>
  )
})
