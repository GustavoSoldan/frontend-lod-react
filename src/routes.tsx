import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout, SignUpLayout } from './pages/_layouts/auth'
import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { Help } from './pages/Help/Help'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/sign-in', element: <SignIn /> }],
  },
  {
    path: '/',
    element: <SignUpLayout />,
    children: [{ path: '/sign-up', element: <SignUp /> }],
  },
  {
    path: '/ajuda',
    element: <Help />,
    children: [{ path: '/ajuda', element: <Help /> }],
  },
])
