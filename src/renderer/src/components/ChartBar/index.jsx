import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
import { Bar } from 'react-chartjs-2'
import { options } from './options'

export function ChartBar({ data, title, classList, scaleMax }) {
  return (
    <div
      className={`${classList !== undefined || classList !== '' ? classList : 'w-full h-full'} `}
    >
      <Bar
        options={
          title !== undefined
            ? options(title, scaleMax && scaleMax)
            : options('', scaleMax && scaleMax)
        }
        data={data}
      />
    </div>
  )
}
