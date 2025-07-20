// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, ssrBuild }) => {
  if (ssrBuild) {
    // SSR build config
    return {
      plugins: [react()],
      build: {
        ssr: true,
        outDir: 'dist/server',
        rollupOptions: {
          input: './server/entry-server.jsx',
        },
      },
      ssr: {
        noExternal: ['react-helmet-async'],
      },
    }
  } else {
    // Client build config
    return {
      plugins: [react()],
      build: {
        outDir: 'dist/client', // prevent overwriting SSR
      },
    }
  }
})
