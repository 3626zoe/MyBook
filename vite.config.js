import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import tailwincss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwincss(),
  ],
})
=======

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
>>>>>>> d51e5b035ccdc795ff48b934dd2ea216a19ee72e
