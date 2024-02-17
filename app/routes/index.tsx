import { css } from 'hono/css'
import { getCookie, setCookie } from 'hono/cookie'
import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'

const className = css`
  font-family: sans-serif;
`

export const POST = createRoute(async (c) => {
  const { name } = await c.req.parseBody<{name: string}>()
  setCookie(c, 'name', name)
  return c.redirect('/')
})

export default createRoute((c) => {
  const name = getCookie(c, 'name') ?? 'Hono'
  return c.render(
    <div class={className}>
      <h1>Hello, {name}!</h1>
      <Counter />
      <form method="POST">
        <input type="text" name="name" placeholder="Enter Name" />
        <input type="submit" />
      </form>
    </div>,
    { title: name }
  )
})
