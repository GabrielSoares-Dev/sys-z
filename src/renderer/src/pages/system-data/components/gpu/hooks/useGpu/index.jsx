import { useEffect, useState } from 'react'
import { useSystemData } from '@hooks'

export function useGpu() {
  const { gpu } = useSystemData().systemData
  const [gpuData, setGpuData] = useState([])
  const [gpuUsageArray, setGpuUsageArray] = useState([parseFloat(gpu.usage)])

  const formatData = () => {
    const hasGpuName = !!gpu.name && gpu.name !== ''
    const formattedName = hasGpuName ? gpu.name.split(' ', [2]).join(' ') : ''

    const data = { ...gpu, name: formattedName, specification: gpu.name }
    setGpuData([])
    Object.keys(data).forEach((key, i) => {
      setGpuData((prev) => [...prev, { name: key, value: Object.values(data)[i] }])
    })
  }

  const gpuUsage = () => {
    let data = gpuUsageArray

    if (isNaN(gpu.usage)) {
      data.push(data[data.length - 1])
    } else {
      data.push(parseFloat(gpu.usage))
    }
    setGpuUsageArray(data)

    if (data.length > 5) {
      data.shift()
    }

    setGpuUsageArray(data)
  }

  useEffect(() => {
    formatData()
    gpuUsage()
  }, [gpu])

  return { gpuData, gpuUsageArray }
}
