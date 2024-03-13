import * as S from './styles'

export function Button({ children, ...props }) {
  return <S.Button {...props}>{children}</S.Button>
}
