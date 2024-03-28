import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '../components/BaseLayout'
import HomePage from '../pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/pokemon',
        element: <HomePage />
      },
      {
        path: '/pokemon/:id',
        element: <h1>Pokemon Details</h1>
      }
    ]
  }
])

export default router