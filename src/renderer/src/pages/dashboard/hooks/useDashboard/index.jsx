import { useEffect, useState } from 'react'
import { convertBytes } from '../../../../utils'

export function useDashboard() {
  const [systemData, setSystemData] = useState({
    cpu: {
      name: '',
      usage: 0,
      temperature: 0
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
    }
  })

  const requestSystemInfo = () => window.electron.ipcRenderer.send('request-system-info')

  const getSystemData = () => {
    window.electron.ipcRenderer.on('system-info-data', (event, data) => {
      const cpu = {
        name: data.cpu.name,
        usage: data.cpu.usage,
        temperature: data.cpu.temperature
      }

      const memory = {
        available: convertBytes(data.memory.available),
        used: convertBytes(data.memory.used),
        types: data.memory.types
      }

      const gpu = {
        name: data.gpu.name,
        usage: data.gpu.usage,
        temperature: data.gpu.temperature
      }

      setSystemData({ cpu, gpu, memory })
    })
  }

  useEffect(() => {
    getSystemData()

    const requestSystemInfoInterval = setInterval(requestSystemInfo, 5000)

    return () => {
      window.electron.ipcRenderer.removeAllListeners('system-info-data')
      clearInterval(requestSystemInfoInterval)
    }
  }, [])

  return {
    systemData
  }
}
