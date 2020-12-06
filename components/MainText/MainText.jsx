import React from 'react'
import PropTypes from 'prop-types'

import styles from './MainText.module.css'

const MainText = ({ title, children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {title}
        </h2>

        <div className={styles.text}>
          {children}
        </div>
      </div>
    </div>
  )
}

MainText.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

export default MainText
