import { SystemDataProvider } from '@providers'

export function AppProvider({ children }) {
  return <SystemDataProvider>{children}</SystemDataProvider>
}
