import { useSystemDataProvider } from './hooks'
import { SystemDataContext } from '@contexts'

export function SystemDataProvider({ children }) {
  const { systemData, setSystemData } = useSystemDataProvider()
  return (
    <SystemDataContext.Provider value={{ systemData, setSystemData }}>
      {children}
    </SystemDataContext.Provider>
  )
}
