import { Button } from '~/components/ui/button'
import type { Route } from './+types/home'
import { useEffect, useRef, useState } from 'react'
import stuff from './stuff.svg'
import { Input } from '~/components/ui/input'

import LiquidChrome from '~/components/backgrounds/LiquidChrome'
import SplitText from '~/components/text-animations/SplitText'
import LoadingSpinner from '~/components/LoadingSpinner'

import useAuth from '~/hooks/useAuth'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Landing Page' },
    { name: 'description', content: 'Welcome to React Router' },
  ]
}

export default function Home() {
  let [loggedInclasses, setLoggedInclasses] = useState('hidden')
  let [notLoggedInClasses, setNotLoggedInClasses] = useState('')

  const { accessToken, loading } = useAuth()

  useEffect(() => {
    if (accessToken) {
      setLoggedInclasses('')
      setNotLoggedInClasses('hidden')
    } else {
      setLoggedInclasses('hidden')
      setNotLoggedInClasses('')
    }
  }, [accessToken, loading])
  return (
    <>
      {loading ? (
        <div className="flex h-full w-full justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <LoggedIn classname={loggedInclasses}></LoggedIn>
          <NotLoggedIn classname={notLoggedInClasses}></NotLoggedIn>
        </>
      )}
    </>
  )
}

const LoggedIn = (props: { classname: any }) => {
  return (
    <div className={props.classname}>
      <h1>Hi! you are logged in </h1>
    </div>
  )
}

const NotLoggedIn = (props: { classname: any }) => {
  let fName: any = useRef(null)

  return (
    <div className={props.classname}>
      <div className="flex w-full h-full absolute -z-1 opacity-30">
        <LiquidChrome
          baseColor={[0.22, 0.25, 0.25]}
          speed={0.2}
          amplitude={0.6}
          interactive={false}
        />
      </div>
      <div className="flex justify-center w-full h-150 items-center flex-col p-4">
        <h1 className="text-4xl md:text-6xl text-center mt-3 font-bold">
          <SplitText
            text="Fight Back with Every Step,"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <br />
          <SplitText
            text="Your Health starts here."
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </h1>
        <p className="mt-3 text-xl text-center">
          Take on personalized health missions to help you live a healthier
          life{' '}
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            localStorage.setItem('email', fName.current.value)
            window.location.href = '/auth/register'
          }}
          className="w-full md:w-1/2"
        >
          <div className="flex flex-row flex-wrap justify-center gap-5 mt-8">
            <Input
              className="w-full md:w-2/3 px-4 py-3 h-13.5 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#929292] self-center"
              name="text"
              placeholder="Enter email"
              type="email"
              ref={fName}
              required
            />
            <Button className="px-4 py-3 h-full w-fit">
              Next <img src={stuff} alt="arrow" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
