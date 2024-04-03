import { useCpu } from './hooks'
import { Logo as SVG } from './functions'

import { Layout } from '../layout'
import { Spinner } from '@components'

import * as S from '../styles'

export function CPU() {
  const { cpuData } = useCpu()

  return cpuData.length > 0 ? (
    <Layout>
      <S.Fieldset>
        <S.Legend>Processor</S.Legend>
        <S.Article>
          <S.Table>
            <S.Tbody>
              {cpuData?.map(({ name, value }) => (
                <S.Tr>
                  <S.Title>{name}</S.Title>
                  {parseFloat(value) ? (
                    <S.Description>{value} %</S.Description>
                  ) : (
                    <S.Description>{value}</S.Description>
                  )}
                </S.Tr>
              ))}
            </S.Tbody>
          </S.Table>
          <S.Logo src={SVG(cpuData[0]?.value)} alt="logo" />
        </S.Article>
      </S.Fieldset>

      <S.Article></S.Article>
    </Layout>
  ) : (
    <Layout>
      <div className="w-full min-h-40 flex justify-center items-center">
        <Spinner size={8} color="text-blue-700" />
      </div>
    </Layout>
  )
}
