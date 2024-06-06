import path from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://leagueofdravenapi.azurewebsites.net',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
    host: true,
  },
})
