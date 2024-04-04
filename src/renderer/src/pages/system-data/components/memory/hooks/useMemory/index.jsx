import { useState, useEffect } from 'react'
import { useSystemData } from '@hooks'
import { convertBytes } from '@utils'

export function useMemory() {
  const { memory } = useSystemData().systemData
  const [memoryData, setMemoryData] = useState([])
  const [memoryUsageArray, setMemoryUsageArray] = useState([
    parseFloat(convertBytes(memory.available)),
    parseFloat(convertBytes(memory.used))
  ])

  const formatData = () => {
    const data = {
      ...memory,
      total: memory.available + memory.used,
      type: memory.types[0]
    }
    let usageArray = memoryUsageArray
    delete data.types

    setMemoryData([])
    Object.keys(data).forEach((key, i) => {
      setMemoryData((prev) => [
        ...prev,
        {
          name: key,
          value: parseInt(Object.values(data)[i])
            ? convertBytes(Object.values(data)[i])
            : Object.values(data)[i]
        }
      ])
      if (parseInt(Object.values(data)[i])) {
        usageArray.push(parseFloat(convertBytes(Object.values(data)[i])))
      }
      if (usageArray.length > 3) usageArray.shift()
      setMemoryUsageArray(usageArray)
    })
  }

  useEffect(() => {
    formatData()
  }, [memory])
  return { memory, memoryData, memoryUsageArray }
}
