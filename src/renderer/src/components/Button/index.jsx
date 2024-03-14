import * as S from './styles'

export function Button({ children, isLoading = false, ...props }) {
  return (
    <S.Button {...props}>
      {isLoading ? (
        <>
          <S.Loading />
          {'Processando...'}
        </>
      ) : (
        children
      )}
    </S.Button>
  )
}
