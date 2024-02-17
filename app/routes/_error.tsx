import { ErrorHandler } from 'hono'

const handler: ErrorHandler = (e, c) => {
  return c.render(
    <div>
      <h1>There's an error!</h1>
      <code>{e.message}</code>
    </div>
  )
}

export default handler
