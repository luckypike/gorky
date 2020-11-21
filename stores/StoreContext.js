import { createContext, useContext } from 'react'

const StoreContext = createContext()

const useStore = () => useContext(StoreContext)

export { StoreContext, useStore }
