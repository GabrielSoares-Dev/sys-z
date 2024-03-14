import { Button } from '@components'
import { useHome } from './hooks'
import * as S from './styles'

export function Home() {
  const { isLoadingToFirstRequest, onEnter } = useHome()

  return (
    <S.Container>
      <S.Title>Bem vindo ao SYS-Z</S.Title>
      <S.Description>
        Monitore todos os componentes do seu PC em tempo real. Tenha controle total do desempenho e
        temperatura com nosso sistema intuitivo.
      </S.Description>
      <div className="w-80">
        <Button isLoading={isLoadingToFirstRequest} onClick={onEnter}>
          Entrar
        </Button>
      </div>
    </S.Container>
  )
}
