import { SystemDataProvider, NotificationProvider } from '@providers'
import { ToastContainer } from 'react-toastify'

export function AppProvider({ children }) {
  return (
    <SystemDataProvider>
      <NotificationProvider>
        <ToastContainer />
        {children}
      </NotificationProvider>
    </SystemDataProvider>
  )
}
