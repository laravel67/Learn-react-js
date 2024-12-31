import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      index:    "index.htm  l",
      contact:  "contact.html" ,
      note:     "note.htm   l",
      profile:  "profile.tml  ",      
    }
  }
})
