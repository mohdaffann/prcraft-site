import Home from "./Pages/Home"
import './index.css'
import Layout from "./Layout/Layout"
import Docs from "./Pages/Docs"
import Installation from "./Pages/Installation"
import { createBrowserRouter, RouterProvider } from "react-router"
function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: '/installation',
          element: <Installation />
        },
        {
          path: '/docs',
          element: <Docs />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
