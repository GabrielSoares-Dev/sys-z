import { SystemDataProvider } from '@providers'
import { ToastContainer } from 'react-toastify'

export function AppProvider({ children }) {
  return (
    <>
      <ToastContainer />
      <SystemDataProvider>{children}</SystemDataProvider>
    </>
  )
}
