import { useNavigate } from 'react-router-dom'
import { useSystemData } from '@hooks'
import { useEffect } from 'react'

export function useHome() {
  const { isLoadingToFirstRequest, dataCaptured, setIsLoadingToFirstRequest } = useSystemData()
  const navigate = useNavigate()

  const onEnter = () => {
    setIsLoadingToFirstRequest(true)
    window.electron.ipcRenderer.send('request-system-info')
  }

  useEffect(() => {
    if (dataCaptured) navigate('/navigation')
  }, [dataCaptured])

  return {
    isLoadingToFirstRequest,
    onEnter
  }
}
