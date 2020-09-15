import { useContext, createContext } from 'react'

import { Services } from 'src/services'

export const ServiceContext = createContext({} as Services)

export function useServices () {
  return useContext(ServiceContext)
}
