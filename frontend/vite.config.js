import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import "dotenv/config";

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.VITE_PORT_FRONTEND,
    host: process.env.VITE_HOST
  }
})
