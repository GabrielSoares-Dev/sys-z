import { useContext } from 'react'
import { SystemDataContext } from '@contexts'

export function useSystemData() {
  return useContext(SystemDataContext)
}
