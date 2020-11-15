import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Burger.module.css'

const Burger = ({ dark, activeNav }) => {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={classNames(styles.root, { [styles.dark]: dark, [styles.active]: activeNav })}>
      <rect x="10" y="14" width="28" height="3" />
      <rect x="10" y="23" width="28" height="3" />
      <rect x="10" y="32" width="28" height="3" />
      <rect className={styles.close} x="10" y="23" width="27" height="2" />
      <rect className={styles.close} x="10" y="23" width="27" height="2" />
    </svg>
  )
}

Burger.propTypes = {
  dark: PropTypes.bool,
  activeNav: PropTypes.bool
}

export default Burger
