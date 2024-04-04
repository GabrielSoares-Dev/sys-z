import { useMemory } from './hooks'
import { chartData } from './functions'

import { Spinner, ChartPie, ChartBar } from '@components'
import { Layout } from '../layout'

import * as S from '../styles'

export function Memory() {
  const { memory, memoryData, memoryUsageArray } = useMemory()

  return memoryData?.length > 1 ? (
    <Layout>
      <S.Fieldset>
        <S.Legend>Memory</S.Legend>
        <S.Article>
          <S.Table>
            <S.Tbody>
              {memoryData?.reverse()?.map(({ name, value }) => (
                <S.Tr key={name}>
                  <S.Title>{name}</S.Title>
                  <S.Description>{value}</S.Description>
                </S.Tr>
              ))}
            </S.Tbody>
          </S.Table>
        </S.Article>
        <S.Article className="w-1/2">
          <ChartPie
            data={chartData(null, [memoryUsageArray[1], memoryUsageArray[0]])}
            title="RAM Usage 1"
            classList="w-1/3 h-72"
          />
          <ChartBar
            data={chartData(null, [memoryUsageArray[1], memoryUsageArray[0]])}
            title="RAM Usage 2"
            classList="w-1/3 h-72"
            scaleMax={memoryUsageArray[2]}
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
