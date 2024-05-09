import {
  defineConfig, loadEnv, ResolvedConfig, UserConfigExport,
} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

function resolve(dir: string) {
  return path.resolve(__dirname, './', dir)
}

// https://vitejs.dev/config/
export default ({ mode }: ResolvedConfig): UserConfigExport => {
  const env = { ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    base: env.VITE_BASE,
    resolve: {
      dedupe: ['vue'], // https://github.com/vuejs/vue-next/issues/2064#issuecomment-797365133
      alias: {
        '@': resolve('./src'),
        '@p': resolve('./packages'),
      },
    },
    css: {
      preprocessorOptions: {
      },
    },
    plugins: [
      vue(),
    ],
    server: {
      proxy: {
      },
    },
  })
}
