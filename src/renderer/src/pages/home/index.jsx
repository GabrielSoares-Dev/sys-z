import { Button } from '../../components'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

export function Home() {
  const navigate = useNavigate()
  return (
    <S.Container>
      <S.Title>Bem vindo ao SYS-Z</S.Title>
      <S.Description>
        Monitore todos os componentes do seu PC em tempo real. Tenha controle total do desempenho e
        temperatura com nosso sistema intuitivo.
      </S.Description>
      <div className="w-80">
        <Button onClick={() => navigate('/dashboard')}>Entrar</Button>
      </div>
    </S.Container>
  )
}
