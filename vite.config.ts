import pages from '@hono/vite-cloudflare-pages'
import honox from 'honox/vite'
import client from 'honox/vite/client'
import { defineConfig } from 'vite'
import { getEnv } from '@hono/vite-dev-server/cloudflare-pages'
import devServer from '@hono/vite-dev-server'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [client()]
    }
  } else {
    return {
      plugins: [
        honox(),
        pages(),
        devServer({
          entry: 'app/server.ts',
          env: getEnv({
            bindings: {
              Name: 'Hono',
            },
            d1Databases: ['MY_D1_DB'],
            d1Persist: true,
          })
        })
      ]
    }
  }
})
