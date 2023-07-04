import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { RouterProvider } from 'react-router-dom'
import publicRoutes from './routes/routes'

function App() {

  return (
    
     <RouterProvider router={publicRoutes} />    
    
  )
}

export default App
