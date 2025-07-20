// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, ssrBuild }) => {
  return {
    plugins: [react()],
    build: {
      outDir: ssrBuild ? 'dist/server' : 'dist/client',
      ssr: ssrBuild ? './server/entry-server.jsx' : false,
      rollupOptions: ssrBuild
        ? { input: './server/entry-server.jsx' }
        : undefined,
    },
    ssr: {
      noExternal: ['react-helmet'], // important for SSR
    },
  }
})
