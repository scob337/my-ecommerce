import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Components/MainLayout.tsx'
import Home from './Components/Home/Home.tsx'
const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

    ]
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
