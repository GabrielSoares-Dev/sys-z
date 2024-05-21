import { useDisk } from './hooks'

import { Layout } from '../layout'
import { Spinner } from '@components'

import logo from './images/hardDisk.svg'

import * as S from '../styles'

export function Disks() {
  const { diskData } = useDisk()

  return diskData.length > 1 ? (
    <Layout>
      <S.Fieldset className="pb-8">
        <S.Legend>Hard Disk</S.Legend>
        <S.Article>
          <S.Table>
            <S.Tbody>
              {diskData?.map(({ name, value }) => (
                <S.Tr key={name}>
                  <S.Title>{name}</S.Title>
                  <S.Description>{value || 'Não identificado'}</S.Description>
                </S.Tr>
              ))}
            </S.Tbody>
          </S.Table>
          <S.Logo className="w-32 h-32" src={logo} alt="logo" />
        </S.Article>
      </S.Fieldset>
    </Layout>
  ) : (
    <Layout>
      <div className="w-full min-h-40 flex justify-center items-center">
        <Spinner size={8} color="text-blue-700" />
      </div>
    </Layout>
  )
}
