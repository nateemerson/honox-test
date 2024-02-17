import { Hono } from 'hono'

const app = new Hono()

const goals = [
  'Goal One',
  'Second Goal',
  'Goal #3'
]

app.get('/', (c) => {
  return c.json(goals)
})

export default app
