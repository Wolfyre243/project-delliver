// Layout for landing page and about page, etc
import { Outlet } from 'react-router'
import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router'
import AppBar from '~/components/appbar'
import useAuth from '~/hooks/useAuth'
import useRefreshToken from '~/hooks/useRefreshToken'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { accessToken } = useAuth()
  const refreshToken = useRefreshToken()

  const navigate = useNavigate()

  // Auto-refresh access token, as long as refresh token is available.
  useLayoutEffect(() => {
    ;(async () => {
      if (accessToken) {
        navigate('/dashboard')
      } else {
        // If access token is gone from memory, generate a new one
        await refreshToken()
      }
    })()
  }, [accessToken])

  return (
    <>
      <AppBar />
      <Outlet />
    </>
  )
}
