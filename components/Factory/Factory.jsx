import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import styles from './Factory.module.css'

const Factory = ({ children }) => {
  return (
    <div className={styles.root}>
      <Link href="/">
        <a className={styles.back}>
          <svg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 9.99992L9.73455 0L11.1776 1.48242L3.91661 8.94137H50V11.0378H3.89649L11.1776 18.5176L9.73454 20L0 9.99992Z"
              fill="#D63517"
            />
          </svg>

          <span className={styles.backText}>
            <span className={styles.rd}>ГОРЬКИЙ</span> СИМВОЛ ПОБЕДЫ
          </span>
        </a>
      </Link>

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
