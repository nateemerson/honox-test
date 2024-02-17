import { Style } from 'hono/css'
import { jsxRenderer } from 'hono/jsx-renderer'
import { HasIslands } from 'honox/server'

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        { import.meta.env.PROD ? (
          <HasIslands>
            <script type="module" src="/static/client-SG2LP4Yt.js"></script>
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
