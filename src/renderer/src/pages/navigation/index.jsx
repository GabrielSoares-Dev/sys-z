import { Card } from './components'
import { cards } from './objects'
import * as S from './styles'

export function Navigation() {
  return (
    <S.Container>
      <S.Title>Selecione a informação desejada</S.Title>
      <S.CardsContainer>
        {cards.map((card) => (
          <Card
            key={card.information}
            information={card.information}
            background={card.background}
            navigateTo={card.navigateTo}
          />
        ))}
      </S.CardsContainer>
    </S.Container>
  )
}
