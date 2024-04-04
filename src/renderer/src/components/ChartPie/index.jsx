import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
import { Pie } from 'react-chartjs-2'
import { options } from './options'

export function ChartPie({ data, title, classList }) {
  return (
    <div
      className={`${classList !== undefined || classList !== null || classList !== '' ? classList : 'w-full h-full'} `}
    >
      <Pie options={title !== undefined ? options(title) : options('')} data={data} />
    </div>
  )
}
