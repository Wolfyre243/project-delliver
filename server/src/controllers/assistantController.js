// Import services
import assistantService from '../services/ai.js'

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

export default controller
