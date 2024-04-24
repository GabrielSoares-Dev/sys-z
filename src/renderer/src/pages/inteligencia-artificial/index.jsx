import { useEffect } from 'react'

import { useGemini } from './hooks'
import { Layout } from './layout'

import * as S from './styles'

export function InteligenciaArtificial() {
  const { userMsg, setUserMsg, messages, loading, msgContainerRef, makeQuestion, scrollToBottom } =
    useGemini()

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <Layout>
      <S.Title>
        Inteligência Artificial <strong>SYZ-Z</strong>
      </S.Title>

      <S.Main onSubmit={makeQuestion}>
        <S.Container
          ref={msgContainerRef}
          className="scrollbar h-full flex-col items-center pt-4 px-2 pb-8 gap-8 border-4 rounded-xl bg-slate-100 overflow-x-hidden overflow-y-scroll"
        >
          {messages.map((message, index) => (
            <S.Message key={index} from={message.from}>
              <p>{message.msg}</p>
              <S.DateMsg from={message.from}>{message.date}</S.DateMsg>
            </S.Message>
          ))}
          {loading && (
            <S.Message>
              <p>...</p>
            </S.Message>
          )}
        </S.Container>

        <S.Container className="h-1/8">
          <S.Input
            onChange={(e) => setUserMsg(e.target.value)}
            value={userMsg}
            disabled={loading}
          />
          <S.Button disabled={loading}>
            <p>Enviar</p>
          </S.Button>
        </S.Container>
      </S.Main>
    </Layout>
  )
}
