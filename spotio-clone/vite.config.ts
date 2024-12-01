import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['tailwind.config.js'],
    esbuildOptions: {
      target: 'esnext',
      define: {
        global: 'globalThis',
      },
      supported: {
        bigint: true,
      },
    },
  },
  build: {
    target: 'esnext', //
    commonjsOptions: {
      include: ['tailwind.config.js', 'node_modules/**'],
      transformMixedEsModules: true,
    },
  },
})
