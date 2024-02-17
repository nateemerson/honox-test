import { css } from 'hono/css'
import { createRoute } from 'honox/factory'

const className = css`
  font-family: sans-serif;
`

export default createRoute((c) => {
  return c.render(
    <div class={className}>
      <h1>About Stuff</h1>
    </div>,
    { title: 'About Us' }
  )
})
