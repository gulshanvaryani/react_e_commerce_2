import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import StoreContext from './Context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreContext>
        <BrowserRouter>  
      <App />
    </BrowserRouter>
    </StoreContext>
  

    
  </StrictMode>,
)
