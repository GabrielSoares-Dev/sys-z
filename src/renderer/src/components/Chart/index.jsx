import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

import { Bar, Pie, Line } from 'react-chartjs-2'

export function ChartBar(props) {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    aspectRatio: 1,
    indexAxis: props.indexAxis || 'x',
    scale: props.scale,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: props.title,
        color: '#000',
        font: {
          size: 16
        },
        padding: {
          top: 10,
          bottom: 30
        }
      }
    }
  }
  return (
    <div className="w-full h-full">
      <Bar options={options} data={props.data} />
    </div>
  )
}

export function ChartPie(props) {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    aspectRatio: 1,
    indexAxis: props.indexAxis || 'x',
    scale: props.scale,
    plugins: {
      legend: {
        display: true
      },
      title: {
        display: true,
        text: props.title,
        color: '#000',
        font: {
          size: 16
        },
        padding: {
          top: 10,
          bottom: 30
        }
      }
    }
  }
  return (
    <div className="w-full h-full">
      <Pie options={options} data={props.data} />
    </div>
  )
}

export function ChartArea(props) {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    aspectRatio: 1,
    scale: props.scale,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: props.title,
        color: '#000',
        font: {
          size: 16
        },
        padding: {
          top: 10,
          bottom: 30
        }
      }
    }
  }
  return (
    <div className="w-full h-full">
      <Line options={options} data={props.data} />
    </div>
  )
}
