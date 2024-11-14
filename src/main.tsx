import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Page/Home/Home.tsx'
import MainLayout from './Components/MainLayout.tsx'
import { Provider } from 'react-redux'
import store from './RTK/store.ts'
import ProductPage from './Page/SingleProduct/ProductPage.tsx'
import ShoppingCart from './Page/ShoppingCart/ShoppingCart.tsx'
import CheckOut from './Page/Home/CheckOut/CheckOut.tsx'
const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/product/:id',
        element: <ProductPage />,
      },
      {
        path: '/shopping',
        element: <ShoppingCart />,
      },
      {
        path: '/checkout',
        element: <CheckOut />,
      },
      
    ]
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </StrictMode>,
)
