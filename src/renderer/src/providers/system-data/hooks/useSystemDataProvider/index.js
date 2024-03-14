import { useState, useEffect } from 'react'

const systemDataInitialState = {
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
}
export function useSystemDataProvider() {
  const [isLoadingToFirstRequest, setIsLoadingToFirstRequest] = useState(false)
  const [dataCaptured, setDataCaptured] = useState(false)
  const [systemData, setSystemData] = useState(systemDataInitialState)

  const getSystemData = () => {
    window.electron.ipcRenderer.on('system-info-data', (event, data) => {
      const cpu = {
        name: data.cpu.name,
        usage: data.cpu.usage
      }

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
      setIsLoadingToFirstRequest(false)
      setDataCaptured(true)
    })
  }

  useEffect(() => getSystemData(), [])

  return {
    systemData,
    isLoadingToFirstRequest,
    dataCaptured,
    setIsLoadingToFirstRequest
  }
}
