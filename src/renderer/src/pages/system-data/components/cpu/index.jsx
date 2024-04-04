import { useCpu } from './hooks'
import { Logo as SVG, chartData } from './functions'

import { Layout } from '../layout'
import { Spinner, ChartArea } from '@components'

import * as S from '../styles'

export function CPU() {
  const { cpuData, cpuUsageArray } = useCpu()

  return cpuData.length > 1 ? (
    <Layout>
      <S.Fieldset>
        <S.Legend>Processor</S.Legend>
        <S.Article>
          <S.Table>
            <S.Tbody>
              {cpuData?.map(({ name, value }) => (
                <S.Tr key={name}>
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
        <S.Article className="w-1/2">
          <ChartArea data={chartData(cpuUsageArray)} title="CPU Usage" classList="w-full h-72" />
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
