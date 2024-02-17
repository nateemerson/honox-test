import { Hono } from 'hono'

const app = new Hono()

app.get('/ping', (c) => {
  return c.json({message: 'Pong'})
})

export default app
