import { isAxiosError } from 'axios'
import { Icon, Plus } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Input } from '~/components/ui/input'
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
  const navigate = useNavigate()

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

  async function handleNewChat() {
    try {
      const { data: responseData } = await apiPrivate.post(
        '/assistant/conversations'
      )
      const { conversation_id } = responseData

      navigate(`/assistant/${conversation_id}`)
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
    <main className="flex flex-col p-10 justify-center items-center h-full">
      <div className="flex flex-col justify-center items-center gap-10">
        <AssistantSplash username={username} />
        <button onClick={handleNewChat} className="cursor-pointer">
          <div className="flex flex-row px-4 py-2 justify-center items-center gap-3 rounded-xl bg-neutral-800">
            <Plus></Plus>
            <h1 className="font-bold">New Chat</h1>
          </div>
        </button>
      </div>
    </main>
  )
}

export default Assistant
