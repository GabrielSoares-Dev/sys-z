import { useSystemData } from '@hooks'

export function useDashboard() {
  const { systemData } = useSystemData()

  return systemData
}
