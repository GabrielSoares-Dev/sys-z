import { useState, useEffect } from 'react'

export function useSystemDataProvider() {
  const [systemData, setSystemData] = useState({
    cpu: {
      name: '',
      usage: 0
    },
    gpu: {
      name: '',
      usage: 0,
      temperature: 0
    },
    memory: {
      available: 0,
      used: 0,
      types: []
    },
    disks: []
  })

  const requestSystemInfo = () => window.electron.ipcRenderer.send('request-system-info')

  const getSystemData = () => {
    window.electron.ipcRenderer.on('system-info-data', (event, data) => {
      const cpu = {
        name: data.cpu.name,
        usage: data.cpu.usage
      }
      console.log(data.cpu.test)

      const gpu = {
        name: data.gpu.name,
        usage: data.gpu.usage,
        temperature: data.gpu.temperature
      }

      const memory = {
        available: data.memory.available,
        used: data.memory.used,
        types: data.memory.types
      }

      const disks = data.disks
      setSystemData({ cpu, gpu, memory, disks })
    })
  }

  useEffect(() => {
    getSystemData()

    setInterval(requestSystemInfo, 10000)
  }, [])

  return {
    systemData,
    setSystemData
  }
}
