import { createContext } from 'react'

export const SystemDataContext = createContext({
  systemData: {
    cpu: {
      name: '',
      usage: 0
    },
    gpu: {
      name: '',
      usage: 0,
      temperature: 0
    },
    memory: {
      available: 0,
      used: 0,
      types: []
    },
    disks: []
  },
  isLoadingToFirstRequest: false,
  dataCaptured: false,
  setIsLoadingToFirstRequest: () => {}
})
