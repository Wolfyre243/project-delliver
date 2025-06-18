import { useNavigate } from 'react-router'
import useAuth from '../hooks/useAuth'
import React, { useEffect } from 'react'
import LoadingSpinner from './LoadingSpinner'

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const { accessToken, userId, loading } = useAuth()
  const navigate = useNavigate()

  // If role provided not found in allowed roles
  useEffect(() => {
    if (loading) return

    ;(async () => {
      if (!accessToken) {
        console.log('[DEBUG] Access token not found')

        return navigate('/auth/login')
      }
      console.log('[DEBUG] Authenticated. User ID ', userId)
    })()
  }, [accessToken, loading])

  if (loading) return <LoadingSpinner />

  return <>{children}</>
}

export default RequireAuth
