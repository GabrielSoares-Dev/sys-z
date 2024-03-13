import { useDashboard } from "./hooks"




export function Dashboard() {
    const { systemData } = useDashboard()
    return (
        <div>
            <h1>Utilização da CPU : {systemData.cpuUsage}%</h1>
            <h1>Memória usada : {systemData.memoryData.used}</h1>
            <h1>Memória disponivel : {systemData.memoryData.available}</h1>
        </div>
    )
}