import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Page/Home/Home.tsx'
import MainLayout from './Components/MainLayout.tsx'
import { Provider } from 'react-redux'
import store from './RTK/store.ts'
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
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </StrictMode>,
)
