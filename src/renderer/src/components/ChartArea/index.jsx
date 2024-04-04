import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)
import { Line } from 'react-chartjs-2'
import { options } from './options'

export function ChartArea({ data, title, classList, scaleMax }) {
  return (
    <div
      className={`${classList !== undefined || classList !== null || classList !== '' ? classList : 'w-full h-full'} `}
    >
      <Line
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
