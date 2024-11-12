import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Позволяет доступ извне
    port: 5000, // Убедитесь, что этот порт совпадает с тем, что вы используете в EXPOSE
  },
  plugins: [react()]
  
})
