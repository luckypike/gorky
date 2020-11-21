import { makeAutoObservable } from 'mobx'

class AppStore {
  constructor (title) {
    makeAutoObservable(this)
    this.dark = true
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
