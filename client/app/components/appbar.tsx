import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { Button } from '~/components/ui/button'
import useAuth from '~/hooks/useAuth'

export default function AppBar() {
  let [classesForLogin, setClassesForLogin] = useState("flex flex-row gap-2 justify-center items-center");
    const { accessToken } = useAuth()
  
    useEffect(() => {
      if (accessToken) {
        setClassesForLogin("flex flex-row gap-2 justify-center items-center hidden")
      } else {
        setClassesForLogin("flex flex-row gap-2 justify-center items-center")
      }
    }, [accessToken]);
  return (
    
    // TODO: Turn into proper responsive app bar
    <div className="bg-neutral-900 flex flex-row w-full p-3 justify-between shadow-md">
      <div className="">
        <Link to={'/'}>
          <h1 className="text-2xl">HealthNest</h1>
        </Link>
      </div>
      {/* TODO: Dont show if user is logged in */}
      <div className={classesForLogin}>
        <Button asChild>
          <Link to={'/auth/login'}>Login</Link>
        </Button>
      </div>
    </div>
  )
}
