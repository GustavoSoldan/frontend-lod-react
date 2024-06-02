import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Contact } from './pages/app/Contact'
import { Dashboard } from './pages/app/dashboard.tsx'
import { Help } from './pages/app/Help'
import { Home } from './pages/app/Home'
import ProtectedRoute from './ProtectedRoute.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [{ path: '/', element: <Home /> }],
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [{ path: '/dashboard', element: <Dashboard /> }],
  },
  {
    path: '/ajuda',
    element: (
      <ProtectedRoute>
        <Help />
      </ProtectedRoute>
    ),
    children: [{ path: '/ajuda', element: <Help /> }],
  },
  {
    path: '/contato',
    element: (
      <ProtectedRoute>
        <Contact />
      </ProtectedRoute>
    ),
    children: [{ path: '/contato', element: <Contact /> }],
  },
])
