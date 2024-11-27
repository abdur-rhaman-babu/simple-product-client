import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './components/Products.jsx'

const router = createBrowserRouter([
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/products',
      element:<Products/>,
      loader: ()=> fetch('http://localhost:7000/products')
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
