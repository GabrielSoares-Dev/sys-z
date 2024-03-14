import { Main } from '@routes'
import { AppProvider } from '@providers'
import './styles/global.css'

export default function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  )
}
