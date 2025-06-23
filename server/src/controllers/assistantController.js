// Import services
import assistantService from '../services/ai.js'
import assistantModel from '../models/assistantModel.js'

const controller = {}

controller.generateResponse = async (req, res, next) => {
  // TODO: Retrieve user's profile before this?
  const { message } = req.body

  try {
    const response = await assistantService.getAIResponse(message)

    for await (const chunk of response) {
      console.log(chunk.text)
      res.write(chunk.text)
    }

    return res.status(200).end()
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

controller.retrieveAllConversations = async (req, res, next) => {
  const user_id = res.locals.user.user_id

  try {
    const result = await assistantModel.retrieveAll(user_id)
    return res.status(200).json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

controller.retrieveAllConversationMessages = async (req, res, next) => {
  const { conversation_id } = req.params
  const user_id = res.locals.user.user_id

  try {
    const conversation =
      await assistantModel.retrieveConversationById(conversation_id)

    if (conversation.user_id != user_id)
      throw { status: 403, message: 'Not allowed to view this conversation!' }

    const result = await assistantModel.retrieveAllMessages(conversation_id)

    return res.status(200).json({
      title: conversation.title,
      messages: result,
    })
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({ message: error.message })
    }
    console.log(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

controller.startConversation = async (req, res, next) => {
  // const { title } = req.body;
  const user_id = res.locals.user.user_id

  const title = 'New Conversation #X'

  try {
    const { conversation_id } = await assistantModel.createConversation(
      user_id,
      title
    )

    return res.status(200).json({ conversation_id })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

controller.generateReply = async (req, res, next) => {
  const { message } = req.body
  const { conversation_id } = req.params
  const user_id = res.locals.user.user_id

  try {
    const conversation =
      await assistantModel.retrieveConversationById(conversation_id)

    // Error handling
    if (conversation.user_id != user_id)
      throw { status: 403, message: 'Not allowed to edit this conversation!' }

    // Create user's message first
    await assistantModel.insertMessage(conversation_id, 'user', message)

    const retrievedChatHistory =
      await assistantModel.retrieveAllMessages(conversation_id)

    let chatHistory = retrievedChatHistory.map((chatMessage) => {
      return {
        role: chatMessage.role,
        parts: [{ text: chatMessage.message }],
      }
    })

    // Get response from Gemini
    const chat = assistantService.createAIChat(chatHistory)
    const response = await chat.sendMessageStream({
      message: message,
    })

    let reply = ''
    for await (const chunk of response) {
      console.log(chunk.text)
      reply += chunk.text
      res.write(chunk.text)
    }

    await assistantModel.insertMessage(conversation_id, 'model', reply)

    return res.status(200).end()
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({ message: error.message })
    }
    console.log(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

export default controller
