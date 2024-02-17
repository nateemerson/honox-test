import { NotFoundHandler } from 'hono'

const handler: NotFoundHandler = (c) => {
  return c.render(<h1>Not found</h1>)
}

export default handler
