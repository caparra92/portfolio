import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.VUE_APP_DEVBASE_URL': JSON.stringify(env.VUE_APP_DEVBASE_URL),
      'process.env.VUE_APP_PRODBASE_URL': JSON.stringify(env.VUE_APP_PRODBASE_URL),
      'process.env.VUE_APP_VUE_ENV': JSON.stringify(env.VUE_APP_VUE_ENV)
    },
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
