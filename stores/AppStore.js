import { makeAutoObservable } from 'mobx'

class AppStore {
  dark = true
  lax = false
  loaderStart = false
  loaderEnd = false

  constructor () {
    makeAutoObservable(this)
  }

  toggleDark () {
    this.dark = !this.dark
  }

  setDark (value) {
    this.dark = value
  }

  setLaxInit () {
    this.lax = true
  }

  setLoaderStart = (value) => {
    this.loaderStart = value
  }

  setLoaderEnd = (value) => {
    this.loaderEnd = value
  }

  get laxInit () {
    return this.lax
  }
}

export default AppStore
