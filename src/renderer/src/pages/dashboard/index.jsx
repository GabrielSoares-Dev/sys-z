import { useEffect, useState } from 'react'
import { useDashboard } from './hooks'
import { convertBytes } from '@utils'
import { ChartBar, ChartPie, ChartArea } from '@components'

export function Dashboard() {
  const { cpu, gpu, memory, disks } = useDashboard()
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
    <div>
      <h1>Modelo da CPU : {cpu.name}</h1>
      <h1>Utilização da CPU : {cpu.usage}%</h1>
      <h1>Modelo da GPU : {gpu.name}</h1>
      <h1>Utilização da GPU : {gpu.usage}%</h1>
      <h1>Temperatura da GPU : {gpu.temperature}°C</h1>
      <h1>Memória usada : {convertBytes(memory.used)}</h1>
      <h1>Memória disponivel : {convertBytes(memory.available)}</h1>
      <h1>Tipo da memória : {memory.types[0]}</h1>
      {disks.map((disk) => (
        <div key={disk.size} className="w-1/2">
          <h1>Modelo do HD : {disk.name}</h1>
          <h1>Fornecedor do HD : {disk.vendor}</h1>
          <h1>Tamanho do HD : {convertBytes(disk.size)}</h1>
          <h1>Tipo do HD : {disk.type}</h1>
        </div>
      ))}

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
