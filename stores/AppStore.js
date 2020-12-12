import { makeAutoObservable } from 'mobx'

class AppStore {
  nav = false
  loaderStart = false
  loaderEnd = false

  constructor () {
    makeAutoObservable(this)
  }

  toggleNav = () => {
    this.nav = !this.nav
  }

  setNav = (value) => {
    this.nav = value
  }

  setLoaderStart = (value) => {
    this.loaderStart = value
  }

  setLoaderEnd = (value) => {
    this.loaderEnd = value
  }
}

export default AppStore
