import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Detail from '../views/detail/index'
import Home from '../views/home/index'
import More from '../views/more/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'detail',
        element: <Detail />,
      },
      {
        path: 'more',
        element: <More />,
      },
    ],
  },
])

export default router
