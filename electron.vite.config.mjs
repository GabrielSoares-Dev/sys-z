import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@components': resolve('src/renderer/src/components'),
        '@contexts': resolve('src/renderer/src/contexts'),
        '@hooks': resolve('src/renderer/src/hooks'),
        '@pages': resolve('src/renderer/src/pages'),
        '@providers': resolve('src/renderer/src/providers'),
        '@routes': resolve('src/renderer/src/routes'),
        '@utils': resolve('src/renderer/src/utils')
      }
    },
    plugins: [react()]
  }
})
