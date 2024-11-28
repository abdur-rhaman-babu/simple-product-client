import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './components/Products.jsx'
import Update from './components/Update.jsx'

const router = createBrowserRouter([
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/products',
      element:<Products/>,
      loader: ()=> fetch('http://localhost:7000/products')
    },
    {
      path:'/update/:id',
      element:<Update/>,
      loader: ({params})=> fetch(`http://localhost:7000/products/${params.id}`)
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
