import { useDashboard } from './hooks'

export function Dashboard() {
  const { systemData } = useDashboard()
  return (
    <div>
      <h1>Modelo da CPU : {systemData.cpu.name}</h1>
      <h1>Utilização da CPU : {systemData.cpu.usage}%</h1>
      {/* <h1>Temperatura da CPU : {systemData.cpu.temperature}%</h1> */}
      <h1>Modelo da GPU : {systemData.gpu.name}</h1>
      <h1>Utilização da GPU : {systemData.gpu.usage}%</h1>
      <h1>Temperatura da GPU : {systemData.gpu.temperature}°C</h1>
      <h1>Memória usada : {systemData.memory.used}</h1>
      <h1>Memória disponivel : {systemData.memory.available}</h1>
      <h1>Tipo da memória : {systemData.memory.types[0]}</h1>
    </div>
  )
}
