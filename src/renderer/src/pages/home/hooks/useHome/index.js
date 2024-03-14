import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSystemData } from '@hooks'

export function useHome() {
  const { setSystemData } = useSystemData()
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const onEnter = () => {
    setIsLoading(true)
    window.electron.ipcRenderer.send('request-system-info')

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
      setIsLoading(false)
      navigate('/dashboard')
    })
  }

  return {
    isLoading,
    onEnter
  }
}
