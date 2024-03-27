import { Main } from '@routes'
import { AppProvider } from '@providers'
import 'react-toastify/dist/ReactToastify.css'
import './styles/global.css'

export default function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  )
}
