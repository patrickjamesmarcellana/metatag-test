// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ command, ssrBuild }) => {
  return {
    plugins: [react()],
    build: {
      outDir: ssrBuild ? 'dist/server' : 'dist/client',
      ssr: ssrBuild ? 'server/entry-server.jsx' : false,
    },
    ssr: {
      noExternal: ['react-helmet-async'], // ensure proper hydration
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
