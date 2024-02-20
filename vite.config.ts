import pagesBuild from '@hono/vite-cloudflare-pages'
import honox from 'honox/vite'
import clientBuild from 'honox/vite/client'
import { defineConfig } from 'vite'
import pagesPlugin from '@hono/vite-dev-server/cloudflare-pages'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [clientBuild()]
    }
  } else {
    return {
      plugins: [
        honox({
          devServer: {
            plugins: [
              pagesPlugin({
                d1Databases: ['MY_D1_DB'],
                d1Persist: true,
              })
            ]
          }
        }),
        pagesBuild(),
      ]
    }
  }
})
