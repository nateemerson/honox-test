import pagesBuild from '@hono/vite-cloudflare-pages'
import honox from 'honox/vite'
import clientBuild from 'honox/vite/client'
import { defineConfig } from 'vite'
import { getPlatformProxy } from 'wrangler'

export default defineConfig(async ({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [clientBuild()]
    }
  } else {
    const { env, dispose } = await getPlatformProxy()
    return {
      plugins: [
        honox({
          devServer: {
            env,
            plugins: [
              {
                onServerClose: dispose
              }
            ]
          }
        }),
        pagesBuild(),
      ]
    }
  }
})
