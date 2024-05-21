import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Navigation, CPU, GPU, Disks, Memory, InteligenciaArtificial } from '@pages'

export function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/system-data/cpu" element={<CPU />} />
        <Route path="/system-data/gpu" element={<GPU />} />
        <Route path="/system-data/disks" element={<Disks />} />
        <Route path="/system-data/memory" element={<Memory />} />
        <Route path="/inteligencia-artificial" element={<InteligenciaArtificial />} />
      </Routes>
    </BrowserRouter>
  )
}
