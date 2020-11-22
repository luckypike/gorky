import { makeAutoObservable } from 'mobx'

class AppStore {
  dark = true

  constructor () {
    makeAutoObservable(this)
  }

  toggleDark () {
    this.dark = !this.dark
  }

  setDark (value) {
    console.log(value)
    this.dark = value
  }
}

export default AppStore
