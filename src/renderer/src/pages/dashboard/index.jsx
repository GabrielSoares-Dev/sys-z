import { useEffect, useState } from 'react'
import { useDashboard } from './hooks'
import { convertBytes } from '@utils'
import { ChartBar, ChartPie, ChartArea } from '@components'

export function Dashboard() {
  const { cpu, gpu, memory } = useDashboard()
  const [cpuUsageDatas, setCpuUsageDatas] = useState([parseFloat(cpu.usage)])
  const [gpuUsageDatas, setGpuUsageDatas] = useState([parseFloat(gpu.usage)])

  const _cpuGpu = {
    data: {
      labels: ['CPU', 'GPU'],
      datasets: [
        {
          label: null,
          data: [parseFloat(cpu.usage), parseFloat(gpu.usage)],
          backgroundColor: ['#0b5bf09e', '#38ff919e'],
          borderColor: ['#000'],
          borderWidth: 2,
          borderRadius: 10
        }
      ]
    },
    scale: {
      min: 0,
      max: 100
    }
  }

  const _cpu = {
    data: {
      labels: cpuUsageDatas,
      datasets: [
        {
          label: null,
          data: cpuUsageDatas,
          backgroundColor: ['#0b5bf09e'],
          borderColor: ['#000'],
          borderWidth: 2,
          borderRadius: 10,
          tension: 0,
          fill: true
        }
      ]
    },
    scale: {
      min: 0,
      max: 100
    }
  }

  const _gpu = {
    data: {
      labels: gpuUsageDatas,
      datasets: [
        {
          label: null,
          data: gpuUsageDatas,
          backgroundColor: ['#38ff919e'],
          borderColor: ['#000'],
          borderWidth: 2,
          borderRadius: 10,
          tension: 0,
          fill: true
        }
      ]
    },
    scale: {
      min: 0,
      max: 100
    }
  }

  const _gpuTemp = {
    data: {
      labels: ['C°'],
      datasets: [
        {
          label: null,
          data: [gpu.temperature],
          backgroundColor: ['#f0940b9e'],
          borderColor: ['#000'],
          borderWidth: 2,
          borderRadius: 10
        }
      ]
    },
    scale: {
      min: 0,
      max: 100
    }
  }

  const _memRam = {
    data: {
      labels: ['Memória Usada', 'Memória Disponível'],
      datasets: [
        {
          label: null,
          data: [parseFloat(convertBytes(memory.used)), parseFloat(convertBytes(memory.available))],
          backgroundColor: ['#fff7839e', '#9689139e'],
          borderColor: ['#000'],
          borderWidth: 1
        }
      ]
    },
    scale: {
      min: 0,
      max: parseFloat(convertBytes(memory.available)) + parseFloat(convertBytes(memory.used))
    }
  }

  useEffect(() => {
    let cpuData = cpuUsageDatas
    let gpuData = gpuUsageDatas

    cpuData.push(parseFloat(cpu.usage))
    gpuData.push(parseFloat(gpu.usage))

    setCpuUsageDatas(cpuData)
    setGpuUsageDatas(gpuData)

    if (cpuData.length > 5) {
      cpuData.shift()
    }
    if (gpuData.length > 5) {
      gpuData.shift()
    }
    if (isNaN(parseFloat(cpu.usage))) {
      cpuData.pop()
      cpuData.push(10)
    }
    if (isNaN(parseFloat(gpu.usage))) {
      gpuData.pop()
      gpuData.push(10)
    }

    setCpuUsageDatas(cpuData)
    setGpuUsageDatas(gpuData)
  }, [gpu, cpu])

  return (
    <div className="p-20">
      <div className="flex flex-wrap w-full gap-10 ">
        <div className="w-1/6 h-64">
          <ChartBar
            data={_cpuGpu.data}
            title="Utilização da CPU e GPU - Barra"
            scale={_cpuGpu.scale}
          />
        </div>
        <div className="w-1/3 h-64">
          <ChartArea data={_cpu.data} title="Utilização da CPU - Area" scale={_cpu.scale} />
        </div>
        <div className="w-1/3 h-64">
          <ChartArea data={_gpu.data} title="Utilização da GPU - Area" scale={_gpu.scale} />
        </div>
        <div className="w-1/3 h-40">
          <ChartBar
            data={_gpuTemp.data}
            title="Temperatura da GPU - Barra"
            scale={_gpuTemp.scale}
            indexAxis="y"
          />
        </div>
        <div className="w-1/4 h-64">
          <ChartPie
            data={_memRam.data}
            title="Utilização da Memória RAM - Pizza"
            scale={_memRam.scale}
          />
        </div>
      </div>
    </div>
  )
}
