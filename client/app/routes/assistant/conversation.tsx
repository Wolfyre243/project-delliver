import { AvatarImage } from '@radix-ui/react-avatar'
import { isAxiosError } from 'axios'
import { CircleUserRound } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Avatar, AvatarFallback } from '~/components/ui/avatar'
import { Input } from '~/components/ui/input'
import useApiPrivate from '~/hooks/useApiPrivate'
import useAuth from '~/hooks/useAuth'

const ChatMessage = ({ role, message }: { role: string; message: string }) => {
  return (
    <div
      className={`flex flex-row w-full items-center ${role === 'user' ? 'justify-end' : 'justify-baseline'}`}
    >
      <div
        className={`flex gap-5 max-w-3/4 items-center ${role === 'user' ? 'flex-row' : 'flex-row-reverse'}`}
      >
        <div className="px-4 py-2 bg-neutral-800 max-w-full rounded-xl">
          <p className="max-w-full text-wrap break-words">
            {message.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
        <Avatar>
          {role === 'user' ? (
            <>
              <CircleUserRound className="h-full w-full" />
            </>
          ) : (
            <>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>
                <CircleUserRound className="h-full w-full" />
              </AvatarFallback>
            </>
          )}
        </Avatar>
      </div>
    </div>
  )
}

const PendingChatMessage = () => {
  return (
    <div className={`flex flex-row w-full items-center justify-baseline`}>
      <div className={`flex gap-5 max-w-3/4 items-center flex-row-reverse`}>
        <div className="px-4 py-2 bg-neutral-800 max-w-full rounded-xl">
          <div className="flex p-2 space-x-2">
            <span
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: '0s' }}
            ></span>
            <span
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: '0.2s' }}
            ></span>
            <span
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: '0.4s' }}
            ></span>
          </div>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>
            <CircleUserRound className="h-full w-full" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

const Assistant = () => {
  const apiPrivate = useApiPrivate()
  let [username, setUsername] = useState('')
  const { accessToken, loading } = useAuth()
  const [sending, setSending] = useState(false)

  const navigate = useNavigate()

  const { conversation_id } = useParams()

  const [messages, setMessages] = useState([
    {
      conversationmessage_id: null,
      conversation_id: null,
      role: '',
      message: '',
      created_at: '',
    },
  ])

  const sendMsgRef = useRef<HTMLFormElement>(null)
  const bottomRef = useRef<HTMLDivElement | null>(null)

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

  async function getMessages() {
    try {
      const { data: responseData } = await apiPrivate.get(
        `/assistant/conversations/${conversation_id}`
      )
      setMessages(responseData.messages)
    } catch (error) {
      let message
      if (isAxiosError(error)) {
        if (error.response?.status === 403) {
          navigate('/assistant')
        }
        message =
          error.response?.data.message ||
          'Something went wrong. Please try again later.'
      }
      console.log(message)
    }
  }

  async function handleSendMessage(e: React.FormEvent) {
    e.preventDefault()
    if (sendMsgRef.current) {
      const formData = new FormData(sendMsgRef.current)
      const message = formData.get('message') as string
      sendMsgRef.current.reset()
      try {
        setSending(true)
        const { data: responseData } = await apiPrivate.post(
          `/assistant/message/${conversation_id}`,
          { message }
        )
        setSending(false)

        await getMessages()
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
  }

  useEffect(() => {
    getData()
    getMessages()
  }, [accessToken, loading])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages.length, sending])

  return (
    <main className="flex flex-col gap-8 pb-10 justify-center items-center h-full self-center w-full md:w-2/3">
      <div className="flex flex-col h-10/12 w-full overflow-y-scroll space-y-8 px-4 scrollbar-thin">
        {messages.length !== 1
          ? messages.map((message) => {
              return (
                <ChatMessage
                  role={message.role}
                  message={`${message.message}`}
                />
              )
            })
          : ''}
        {sending ? (
          <>
            <PendingChatMessage />
          </>
        ) : (
          <></>
        )}
        <div ref={bottomRef} />
      </div>
      <form
        onSubmit={handleSendMessage}
        ref={sendMsgRef}
        className="h-1/12 w-full px-4"
      >
        <input
          className="rounded-2xl bg-neutral-900 px-4 py-3 w-full"
          type="text"
          placeholder="Send a message..."
          name="message"
          required
        />
      </form>
    </main>
  )
}

export default Assistant
