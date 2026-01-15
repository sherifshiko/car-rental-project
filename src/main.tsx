import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { FavoritesCarsContextProvider } from './context/FavoritesCarsContext.tsx'
import { ListCarsContextProvider } from './context/ListCarsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ListCarsContextProvider>
    <FavoritesCarsContextProvider>
    <App />
    </FavoritesCarsContextProvider>
    </ListCarsContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
