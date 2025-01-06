import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AlertButton from './AlertButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AlertButton text={'asas'}/>
  </StrictMode>,
)
