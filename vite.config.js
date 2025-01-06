import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index:    "index.html",
        contact:  "contact.html" ,
        note:     "note.html",
        profile: "profile.html",
        timer: "timer.html",
        book: "book.html",
        product: "product.html",
        online:  "online.html",
      }     
    }
  }
})
