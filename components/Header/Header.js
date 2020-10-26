import React, { useState, useEffect, useContext } from 'react'
// import PropTypes from 'prop-types'
import classNames from 'classnames'

import Burger from './Burger'
import Nav from './Nav'


import styles from './Header.module.css'

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);
  
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
      <header className={classNames(styles.root, styles.dark, { [styles.active]: activeNav })}>
        <div className={classNames(styles.burger, { [styles.active]: activeNav })} onClick={() => setActiveNav(!activeNav)}>
          <Burger dark={true} activeNav={activeNav} />
        </div>

        <div className={styles.logo}></div>
      </header>

      <div className={classNames(styles.nav, { [styles.active]: activeNav })}>
        <Nav
          setActive={setActiveNav}
        />
      </div>
    </>
  )
}

export default Header;
