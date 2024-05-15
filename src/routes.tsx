import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Contato } from './pages/app/Contato'
import { Dashboard } from './pages/app/dashboard'
import { Help } from './pages/app/Help'
import { Home } from './pages/app/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [{ path: '/', element: <Home /> }],
  },
  {
    path: '/dashboard',
    element: <AppLayout />,
    children: [{ path: '/dashboard', element: <Dashboard /> }],
  },
  {
    path: '/ajuda',
    element: <Help />,
    children: [{ path: '/ajuda', element: <Help /> }],
  },
  {
    path: '/contato',
    element: <Contato />,
    children: [{ path: '/contato', element: <Contato /> }],
  },
])
