import { useNavigate } from 'react-router-dom'
import * as S from './styles'

export function Card({ background, information, navigateTo }) {
  const navigate = useNavigate()
  return (
    <S.Container onClick={() => navigate(navigateTo)} background={background}>
      <S.Information>{information}</S.Information>
    </S.Container>
  )
}
