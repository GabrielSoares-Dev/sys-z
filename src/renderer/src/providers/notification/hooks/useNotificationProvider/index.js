import { useEffect, useRef } from 'react'
import { useSystemData } from '@hooks'
import { showToast } from '@functions'

export function useNotificationProvider() {
  const { systemData } = useSystemData()
  const audioRef = useRef()

  const maxCpuUsageToNotification = 71.0
  const cpuUsage = systemData.cpu.usage

  const cpuUsageUltrappassed = cpuUsage >= maxCpuUsageToNotification

  useEffect(() => {
    if (cpuUsageUltrappassed) {
      audioRef.current.volume = 0.05
      audioRef.current.play()
      showToast({
        message: `Atenção o uso do seu processador está em ${cpuUsage}%`,
        type: 'warning'
      })
    }
  }, [systemData])

  return {
    audioRef
  }
}
