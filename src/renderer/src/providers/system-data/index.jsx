import { useSystemDataProvider } from './hooks'
import { SystemDataContext } from '@contexts'

export function SystemDataProvider({ children }) {
  const { systemData, isLoadingToFirstRequest, dataCaptured, setIsLoadingToFirstRequest } =
    useSystemDataProvider()
  return (
    <SystemDataContext.Provider
      value={{ systemData, isLoadingToFirstRequest, dataCaptured, setIsLoadingToFirstRequest }}
    >
      {children}
    </SystemDataContext.Provider>
  )
}
