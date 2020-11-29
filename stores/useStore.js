// import { createContext, useContext } from 'react'
import AppStore from './AppStore'

const appStore = new AppStore()

const useStore = () => appStore

export default useStore
