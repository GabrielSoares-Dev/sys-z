
import { useEffect, useState } from 'react'
import { convertBytes } from '../../../../utils';


export function useDashboard() {
    const [systemData, setSystemData] = useState({
        memoryData: {
            available: 0,
            used: 0,
        },
        cpuUsage: 0.00
    })
    const requestSystemInfo = () => window.electron.ipcRenderer.send('request-system-info')

    const getSystemData = () => {
        window.electron.ipcRenderer.on('system-info-data', (event, data) => {
            const memoryData = {
                available: convertBytes(data.memoryData.available),
                used: convertBytes(data.memoryData.used),
            }

            const cpuUsage = data.cpuUsage

            setSystemData({ memoryData, cpuUsage })
        });
    }

    useEffect(() => {
        getSystemData()

        const requestSystemInfoInterval = setInterval(requestSystemInfo, 5000);

        return () => {
            window.electron.ipcRenderer.removeAllListeners('system-info-data');
            clearInterval(requestSystemInfoInterval);
        };
    }, [])


    return {
        systemData
    }
}