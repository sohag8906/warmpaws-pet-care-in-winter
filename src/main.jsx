import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './routes/Router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import LoadingProvider from './components/LoadingProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <LoadingProvider>
<RouterProvider router={router}></RouterProvider>
      </LoadingProvider>
        
    </AuthProvider>
    
  </StrictMode>,
)
