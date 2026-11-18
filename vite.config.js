import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // La ruta relativa funciona tanto en un dominio propio como en /nombre-del-repo/.
  base: './',
})
