import { useRef, useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { getDate } from '../../functions'

export function useGemini() {
  const [userMsg, setUserMsg] = useState('')
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const msgContainerRef = useRef(null)
  const genAI = new GoogleGenerativeAI('AIzaSyC42jfrdref0WEUe_LSeTV23JfmvWkLJE0')

  const questAI = async (question) => {
    const currentDate = getDate()
    const generationConfig = {
      maxOutputTokens: 2000,
      temperature: 0.1,
      topP: 0.1,
      topK: 1
    }
    const model = genAI.getGenerativeModel({ model: 'gemini-pro', generationConfig })
    const prompt = `Instruções iniciais: A partir de agora você é uma inteligência artificial que se chama 'Miracle' produzida pela empresa 'Automated Applications' e você está integrado ao software inteligente chamado 'SYS-Z', que tem como seus fundadores: Gabriel Maciel, Alyfer Pedroso e Dyego. Se alguem perguntar algo relacionado a isso, você tem q responder de acordo com essas instruções. Pergunta: ${question}`
    const result = await model.generateContent(prompt)
    const text = result.response.text()
    setMessages((msgs) => [...msgs, { from: 'gpt', date: currentDate, msg: text }])
    scrollToBottom()
    setLoading(false)
  }

  const makeQuestion = async (e) => {
    e.preventDefault()
    if (userMsg === '') return
    const formatedDate = getDate()
    const text = userMsg
    setUserMsg('')
    setMessages((msgs) => [...msgs, { from: 'user', date: formatedDate, msg: text }])
    setLoading(true)
    await questAI(text)
  }

  const scrollToBottom = () => {
    msgContainerRef.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth' })
  }

  return {
    userMsg,
    setUserMsg,
    messages,
    loading,
    setLoading,
    msgContainerRef,
    makeQuestion,
    scrollToBottom
  }
}
