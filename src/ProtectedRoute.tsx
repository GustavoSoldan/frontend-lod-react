import { useClerk } from '@clerk/clerk-react'
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useClerk()

  if (!user) {
    return <Navigate to="/" />
  }

  return <>{children}</>
}

export default ProtectedRoute
