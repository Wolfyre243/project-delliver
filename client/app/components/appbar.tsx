import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { Button } from '~/components/ui/button'
import useAuth from '~/hooks/useAuth'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '~/components/ui/navigation-menu'

export default function AppBar() {
  let [classesForLogin, setClassesForLogin] = useState(
    'flex flex-row gap-2 justify-center items-center'
  )
  const { accessToken } = useAuth()

  useEffect(() => {
    if (accessToken) {
      setClassesForLogin(
        'flex flex-row gap-2 justify-center items-center hidden'
      )
    } else {
      setClassesForLogin('flex flex-row gap-2 justify-center items-center')
    }
  }, [accessToken])

  const dashboardMenuComponents: {
    title: string
    href: string
    description: string
  }[] = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      description: 'A quick overview of your health',
    },
    {
      title: 'Missions',
      href: '/dashboard/missions',
      description: 'Browse all missions and your own',
    },
    {
      title: 'Dietary',
      href: '/dashboard/dietary',
      description: 'Your dietary needs',
    },
    {
      title: 'Missions',
      href: '/dashboard/missions',
      description: 'Browse all missions and your own',
    },
  ]

  return (
    // TODO: Turn into proper responsive app bar
    <div className="bg-neutral-900 flex flex-row w-full p-3 justify-between shadow-md">
      <div className="">
        <Link to={'/'}>
          <h1 className="text-2xl">HealthNest</h1>
        </Link>
      </div>
      {/* TODO: turn this into responsive */}
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="gap-10">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/clinics">Clinics</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Dashboard */}
          {accessToken ? (
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Dashboard
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    {dashboardMenuComponents.map((component) => {
                      return (
                        <NavigationMenuLink asChild>
                          <Link to={component.href}>
                            <div className="font-medium">{component.title}</div>
                            <div className="text-muted-foreground">
                              {component.description}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      )
                    })}
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            ''
          )}
        </NavigationMenuList>
      </NavigationMenu>

      {/* TODO: Dont show if user is logged in */}
      {accessToken ? (
        <div className="flex flex-row gap-2 justify-center items-center outline-dotted px-4 rounded-md">
          profile here
        </div>
      ) : (
        <div className={classesForLogin}>
          <Button asChild>
            <Link to={'/auth/login'}>Login</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
