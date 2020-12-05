import { makeAutoObservable } from 'mobx'

class AppStore {
  dark = true
  lax = false

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

  get laxInit () {
    return this.lax
  }
}

export default AppStore
