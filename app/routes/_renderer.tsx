import { Style } from 'hono/css'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Script, HasIslands } from 'honox/server'

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        { true ? (
          <HasIslands>
            <script type="module" src="/static/client.ts"></script>
          </HasIslands>
        ) : (
          <script type="module" src="/app/client.ts"></script>
        )}
        <Style />
      </head>
      <body>{children}</body>
    </html>
  )
})
