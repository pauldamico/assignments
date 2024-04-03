import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/api': {
      target: 'https://www.mmobomb.com', // Your API endpoint
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
})
