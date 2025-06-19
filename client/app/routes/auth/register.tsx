import { isAxiosError } from 'axios'
import { useRef, useState } from 'react'
import { Button } from '~/components/ui/button'
import { Checkbox } from '~/components/ui/checkbox'
import { Input } from '~/components/ui/input'

// import AnimatedContent from '~/components/animations/AnimatedContent'

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from '~/components/ui/select'
import useAuth from '~/hooks/useAuth'
import { useJWTDecode } from '~/hooks/useJWTDecode'
import { useNavigate } from 'react-router'
import api from '~/services/api'

const register = () => {
  let [step, setStep] = useState(1)
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <div className="w-[87%] md:w-150 text-clip mt-5">
          <h3>Step {step} of 3</h3>
          {renderStep(step, setStep)}
        </div>
      </div>
    </>
  )
}

function renderStep(step: any, setStep: any) {
  if (step === 1) {
    return (
      <>
        {/* <AnimatedContent
          distance={1000}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1}
          threshold={0.2}
        > */}
        <Step1 setStep={setStep} />
        {/* </AnimatedContent> */}
      </>
    )
  } else if (step === 2) {
    return (
      <>
        {/* <AnimatedContent
          distance={1000}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1}
          threshold={0.2}
        > */}
        <Step2 setStep={setStep} />
        {/* </AnimatedContent> */}
      </>
    )
  } else {
    return (
      <>
        {/* <AnimatedContent
          distance={1000}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1}
          threshold={0.2}
        > */}
        <Step3 setStep={setStep} />
        {/* </AnimatedContent> */}
      </>
    )
  }
}

const Step1 = (props: { setStep: Function }) => {
  let [familyHistory, setFamilyHistory] = useState(false)
  let [smokeHistory, setSmokeHistory] = useState(false)
  let [screeningHistory, setScreeningHistory] = useState(false)
  let [exerciseDuration, setExerciseDuration] = useState('')
  function handleCheckboxChange(history: any, setHistory: Function) {
    setHistory(history)
    setHistory(history)
  }
  return (
    <>
      <h1 className="mt-6 text-5xl font-bold leading-16">
        👋 Tell Us About Yourself!
      </h1>
      <p className="text-2xl mt-4">
        A little about you so we can tailor your health journey.
      </p>
      <hr className="bg-white mt-10"></hr>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          localStorage.setItem('exerciseDuration', exerciseDuration)
          localStorage.setItem('screeningHistory', String(screeningHistory))
          localStorage.setItem('familyHistory', String(familyHistory))
          localStorage.setItem('smokeHistory', String(smokeHistory))
          props.setStep(2)
          e.preventDefault()
          localStorage.setItem('exerciseDuration', exerciseDuration)
          localStorage.setItem('screeningHistory', String(screeningHistory))
          localStorage.setItem('familyHistory', String(familyHistory))
          localStorage.setItem('smokeHistory', String(smokeHistory))
          props.setStep(2)
        }}
      >
        <div className="flex gap-3 mt-9 text-xl">
          <Checkbox
            id="FamilyHistory"
            className="self-center"
            checked={familyHistory}
            onCheckedChange={(checked) => {
              handleCheckboxChange(checked, setFamilyHistory)
              handleCheckboxChange(checked, setFamilyHistory)
            }}
          />
          <label htmlFor="FamilyHistory">
            My immediate family has a history of cancer
          </label>
        </div>
        <div className="flex gap-3 mt-4 text-xl">
          <Checkbox
            id="smokeHistory"
            className="self-center"
            checked={smokeHistory}
            onCheckedChange={(checked) => {
              handleCheckboxChange(checked, setSmokeHistory)
              handleCheckboxChange(checked, setSmokeHistory)
            }}
          />
          <label htmlFor="smokeHistory">
            I smoke or live with people who smoke
          </label>
        </div>
        <div className="flex gap-3 mt-4 text-xl">
          <Checkbox
            id="screeningHistory"
            className="self-center"
            checked={screeningHistory}
            onCheckedChange={(checked) => {
              handleCheckboxChange(checked, setScreeningHistory)
              handleCheckboxChange(checked, setScreeningHistory)
            }}
          />
          <label htmlFor="screeningHistory">
            I have been to a health screening from SCS in the past 6 months
          </label>
        </div>
        <div className="mt-4">
          <p className="text-xl mb-3">How often do you exercise per week?</p>
          <Select
            onValueChange={(value) => {
              setExerciseDuration(value)
              setExerciseDuration(value)
            }}
            required
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select the duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="no activity">I do not exercise</SelectItem>
              <SelectItem value="light activity">
                1–2 times (light activity)
              </SelectItem>
              <SelectItem value="heavy activity">
                3 or more times (moderate activity)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="mt-7">Next </Button>
      </form>
    </>
  )
}

const Step2 = (props: { setStep: Function }) => {
  let fname: any = useRef(null)
  let lname: any = useRef(null)
  let username: any = useRef(null)
  return (
    <>
      <h1 className="mt-6 text-5xl font-bold leading-16">
        ❓How'd we call you?
      </h1>
      <p className="text-2xl mt-4">We’d love to address you properly.</p>
      <hr className="bg-white mt-10"></hr>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          localStorage.setItem('firstName', fname.current.value)
          localStorage.setItem('lastName', lname.current.value)
          localStorage.setItem('username', username.current.value)
          props.setStep(3)
          e.preventDefault()
          localStorage.setItem('firstName', fname.current.value)
          localStorage.setItem('lastName', lname.current.value)
          localStorage.setItem('username', username.current.value)
          props.setStep(3)
        }}
      >
        <div className="mt-7">
          <label htmlFor="fname">First name:</label>
          <Input
            id="fname"
            type="text"
            placeholder="Enter first name"
            className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] self-center w-full mt-2"
            ref={fname}
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="lname">Last name:</label>
          <Input
            id="lname"
            type="text"
            placeholder="Enter last name"
            className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] self-center w-full mt-2"
            ref={lname}
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="username">Username:</label>
          <Input
            id="username"
            type="text"
            placeholder="Enter username"
            className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] self-center w-full mt-2"
            ref={username}
            required
          />
        </div>
        <Button className="mt-7">Next</Button>
      </form>
    </>
  )
}

const Step3 = (props: { setStep: Function }) => {
  let passwordRef: any = useRef(null)
  let confirmPasswordRef: any = useRef(null)

  const { setAccessToken } = useAuth()
  const JWTDecode = useJWTDecode()

  const navigate = useNavigate()

  return (
    <>
      <h1 className="mt-6 text-5xl font-bold leading-16">
        You're almost there! 🌟
      </h1>
      <p className="text-2xl mt-4">
        Pick a password you’ll remember — and no one else will!
      </p>
      <hr className="bg-white mt-10"></hr>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          try {
            if (
              passwordRef.current.value === confirmPasswordRef.current.value
            ) {
              let emailInput = localStorage.getItem('email')
              let usernameInput = localStorage.getItem('username')
              let fnameInput = localStorage.getItem('firstName')
              let lnameInput = localStorage.getItem('lastName')
              let exerciseDurationInput =
                localStorage.getItem('exerciseDuration')
              let history = [
                {
                  bool: localStorage.getItem('familyHistory'),
                  name: 'familyHistory',
                },
                {
                  bool: localStorage.getItem('screeningHistory'),
                  name: 'screeningHistory',
                },
                {
                  bool: localStorage.getItem('smokeHistory'),
                  name: 'smokeHistory',
                },
              ]
              let historyToPassToBackend = []
              for (let i = 0; i < history.length; i++) {
                debugger
                if (history[i].bool == 'true') {
                  historyToPassToBackend.push(history[i].name)
                }
              }
              let body = {
                username: usernameInput,
                email: emailInput,
                password: passwordRef.current.value,
                confirmPassword: confirmPasswordRef.current.value,
                fname: fnameInput,
                lname: lnameInput,
                exerciseDuration: exerciseDurationInput,
                history: historyToPassToBackend,
              }
              const { data: responseData } = await api.post(
                '/auth/register',
                body,
                { withCredentials: true }
              )

              setAccessToken(responseData.accessToken)
              window.localStorage.setItem(
                'refresh_token',
                responseData.refreshToken
              )
              await JWTDecode(responseData.accessToken)

              if (responseData.accessToken != undefined) {
                localStorage.removeItem('email')
                localStorage.removeItem('exerciseDuration')
                localStorage.removeItem('familyHistory')
                localStorage.removeItem('firstName')
                localStorage.removeItem('lastName')
                localStorage.removeItem('screeningHistory')
                localStorage.removeItem('smokeHistory')
                localStorage.removeItem('username')
              }

              navigate('/dashboard')
            }
          } catch (error) {
            let message
            if (isAxiosError(error)) {
              message =
                error.response?.data.message ||
                'Something went wrong. Please try again later.'
            }
            console.log(message) // TODO: Display error on frontend
          }
        }}
      >
        <div className="mt-7">
          <label htmlFor="fname">Password:</label>
          <Input
            id="fname"
            type="password"
            placeholder="Enter password"
            className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] self-center w-full mt-2"
            required
            ref={passwordRef}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="lname">Confirm password:</label>
          <Input
            id="lname"
            type="password"
            placeholder="Enter password again"
            className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] self-center w-full mt-2"
            required
            ref={confirmPasswordRef}
          />
        </div>
        <Button className="mt-7">Sign up</Button>
      </form>
    </>
  )
}
export default register
