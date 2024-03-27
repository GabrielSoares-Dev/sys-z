import { useNavigate } from 'react-router-dom'
import { Button } from '@components'
import * as S from './styles'

export function Layout({ children }) {
  const navigate = useNavigate()
  return (
    <S.Container>
      <div className="w-32">
        <Button onClick={() => navigate(-1)}>Voltar</Button>
      </div>
      {children}
    </S.Container>
  )
}
