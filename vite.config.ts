import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const _dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@': resolve(_dirname, 'src'),
    },
  },
})
