import { useGpu } from './hooks'
import { Logo as SVG, chartData } from './functions'

import { Layout } from '../layout'
import { Spinner, ChartArea, ChartBar } from '@components'

import * as S from '../styles'

export function GPU() {
  const { gpuData, gpuUsageArray } = useGpu()

  return gpuData.length > 1 ? (
    <Layout>
      <S.Fieldset>
        <S.Legend>Graphics</S.Legend>
        <S.Article>
          <S.Table>
            <S.Tbody>
              {gpuData?.map(({ name, value }) => (
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
          <S.Logo src={SVG(gpuData[0]?.value)} alt="logo" />
        </S.Article>
        <S.Article>
          <ChartArea data={chartData(gpuUsageArray)} title="GPU Usage" classList="w-1/3 h-72" />
          <ChartBar
            data={chartData([parseFloat(gpuData[2]?.value)], '#ffe1389e')}
            title="GPU Temperature"
            classList="w-1/3 h-72"
          />
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
