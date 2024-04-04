import { useEffect, useState } from 'react'
import { useSystemData } from '@hooks'

export function useCpu() {
  const { cpu } = useSystemData().systemData
  const [cpuData, setCpuData] = useState([])
  const [cpuUsageArray, setCpuUsageArray] = useState([parseFloat(cpu.usage)])

  const formatData = () => {
    const formattedName = cpu.name.split(' ', [2]).join(' ')
    const data = { ...cpu, name: formattedName, specification: cpu.name }
    setCpuData([])
    Object.keys(data).forEach((key, i) => {
      setCpuData((prev) => [...prev, { name: key, value: Object.values(data)[i] }])
    })
  }

  const cpuUsage = () => {
    let data = cpuUsageArray

    if (isNaN(cpu.usage)) {
      data.push(data[data.length - 1])
    } else {
      data.push(parseFloat(cpu.usage))
    }
    setCpuUsageArray(data)

    if (data.length > 5) {
      data.shift()
    }

    setCpuUsageArray(data)
  }

  useEffect(() => {
    formatData()
    cpuUsage()
  }, [cpu])

  return { cpuData, cpuUsageArray }
}
