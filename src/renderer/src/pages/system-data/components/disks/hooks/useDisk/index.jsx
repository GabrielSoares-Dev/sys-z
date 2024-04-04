import { useState, useEffect } from 'react'
import { useSystemData } from '@hooks'
import { convertBytes } from '@utils'

export function useDisk() {
  const { disks } = useSystemData().systemData
  const [diskData, setDiskData] = useState([])

  const formatData = () => {
    const formattedSize = convertBytes(disks[0]?.size)
    const data = { ...disks[0], size: formattedSize }
    setDiskData([])
    Object.keys(data).forEach((key, i) => {
      setDiskData((prev) => [...prev, { name: key, value: Object.values(data)[i] }])
    })
  }

  useEffect(() => formatData(), [disks])

  return { diskData }
}
