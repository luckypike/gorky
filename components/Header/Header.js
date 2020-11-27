import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'

import { useStore } from '../../stores/StoreContext'
import Burger from './Burger'
import Nav from './Nav'

import styles from './Header.module.css'

const Header = observer(() => {
  const [activeNav, setActiveNav] = useState(false)
  const store = useStore()

  useEffect(() => {
    window.addEventListener('keydown', onEscapeDown)

    return () => {
      window.removeEventListener('keydown', onEscapeDown)
    }
  }, [])

  const onEscapeDown = event => {
    if (event.key === 'Escape') {
      setActiveNav(false)
    }
  }

  return (
    <>
      <header className={classNames(styles.root, { [styles.dark]: store.dark, [styles.active]: activeNav })}>
        <div className={classNames(styles.burger, { [styles.active]: activeNav })} onClick={() => setActiveNav(!activeNav)}>
          <Burger activeNav={activeNav} />
        </div>

        <div className={styles.text}>
          <Link href="/">
            Горький. Символ победы
          </Link>
        </div>

        <div className={styles.place_logo}>
          <div className={styles.logo} />
        </div>
      </header>

      <div className={classNames(styles.nav, { [styles.active]: activeNav })}>
        <Nav
          setActive={setActiveNav}
        />
      </div>
    </>
  )
})

export default Header
