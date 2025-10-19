import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',    // Listen on all available network interfaces
    port: 5003,
    strictPort: true,    // Fail if port is in use
  },
})