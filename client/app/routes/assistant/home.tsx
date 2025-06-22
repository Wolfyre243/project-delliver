import { isAxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import useApiPrivate from '~/hooks/useApiPrivate'
import useAuth from '~/hooks/useAuth'
import { apiPrivate } from '~/services/api'

const AssistantSplash = (props: { username: string }) => {
  return (
    <section className="flex flex-col justify-center h-full">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-5xl font-semibold">
          Good Morning, {props.username}
        </h1>
        <h1 className="text-5xl font-semibold">How may I assist you today?</h1>
      </div>
    </section>
  )
}

const Assistant = () => {
  const apiPrivate = useApiPrivate()
  let [username, setUsername] = useState('')
  const { accessToken, loading } = useAuth()
  async function getData() {
    try {
      const { data: responseData } = await apiPrivate.get('/users/details')
      setUsername(responseData.username)
    } catch (error) {
      let message
      if (isAxiosError(error)) {
        message =
          error.response?.data.message ||
          'Something went wrong. Please try again later.'
      }
      console.log(message)
    }
  }
  useEffect(() => {
    getData()
  }, [accessToken, loading])

  return (
    <main className="flex flex-col justify-center items-center h-full">
      <AssistantSplash username={username} />
    </main>
  )
}

export default Assistant
