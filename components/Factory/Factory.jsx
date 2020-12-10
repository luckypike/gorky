import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import styles from './Factory.module.css'

const Factory = ({ children }) => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div>
          <Link href="/">
            <a className={styles.back}>
              <svg viewBox="0 0 40 40" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 19.9999L17.5399 10L18.9541 11.4824L11.8383 18.9414H31V21.0378H11.8186L18.9541 28.5176L17.5399 30L8 19.9999Z"
                  fill="#D63517"
                />
              </svg>
            </a>
          </Link>
        </div>

        <div className={styles.name}>
          <span className={styles.rd}>ГОРЬКИЙ</span> СИМВОЛ ПОБЕДЫ
        </div>

        <div className={styles.menu}>
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 19H30V21H9V19Z" fill="#D63517"/>
            <path d="M9 25H30V27H9V25Z" fill="#D63517"/>
            <path d="M9 13H30V15H9V13Z" fill="#D63517"/>
          </svg>
        </div>
      </header>

      <div className={styles.factory}>
        {children}
      </div>
    </div>
  )
}

Factory.propTypes = {
  children: PropTypes.node
}

export default Factory
