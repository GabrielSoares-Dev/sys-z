import { useDashboard } from './hooks'
import { convertBytes } from '@utils'

export function Dashboard() {
  const { cpu, gpu, memory, disks } = useDashboard()

  return (
    <div>
      <h1>Modelo da CPU : {cpu.name}</h1>
      <h1>Utilização da CPU : {cpu.usage}%</h1>
      {/* <h1>Temperatura da CPU : {cpu.temperature}%</h1> */}
      <h1>Modelo da GPU : {gpu.name}</h1>
      <h1>Utilização da GPU : {gpu.usage}%</h1>
      <h1>Temperatura da GPU : {gpu.temperature}°C</h1>
      <h1>Memória usada : {convertBytes(memory.used)}</h1>
      <h1>Memória disponivel : {convertBytes(memory.available)}</h1>
      <h1>Tipo da memória : {memory.types[0]}</h1>
      {disks.map((disk) => (
        <div key={disk.size}>
          <h1>Modelo do HD : {disk.name}</h1>
          <h1>Fornecedor do HD : {disk.vendor}</h1>
          <h1>Tamanho do HD : {convertBytes(disk.size)}</h1>
          <h1>Tipo do HD : {disk.type}</h1>
        </div>
      ))}
    </div>
  )
}
