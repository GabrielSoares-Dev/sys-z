import { useEffect, useState } from 'react'
import { useSystemData } from '@hooks'

export function useCpu() {
  const { cpu } = useSystemData().systemData
  const [cpuData, setCpuData] = useState([])

  const formatName = () => {
    const formatted = cpu.name.split(' ', [2]).join(' ')
    const data = { ...cpu, name: formatted, specification: cpu.name }
    setCpuData([])
    Object.keys(data).forEach((key, i) => {
      setCpuData((prev) => [...prev, { name: key, value: Object.values(data)[i] }])
    })
  }

  useEffect(() => {
    formatName()
  }, [cpu])

  return { cpuData }
}
