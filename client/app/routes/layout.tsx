// Layout for landing page and about page, etc
import { useEffect } from 'react'
import { Outlet } from 'react-router'
import AppBar from '~/components/appbar'
import useAuth from '~/hooks/useAuth'
import LoadingSpinner from '~/components/LoadingSpinner'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { accessToken, loading } = useAuth()
  
  useEffect(()=>{
    console.log("Starting")
  },[accessToken,loading])
  return (
    <>
    {loading ? (
            <div className="flex h-full w-full justify-center items-center">
              <LoadingSpinner />
            </div>
          ) : (<main className="flex flex-col">
        <AppBar />
        <Outlet />
      </main>)}
      
    </>
  )
}
