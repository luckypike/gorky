import React from 'react'
import PropTypes from 'prop-types'

import styles from './Legend.module.css'

const Legend = ({ title, children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.legend}>ЛЕГЕНДЫ</div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.desc}>{children}</div>
      </div>
    </div>
  )
}

Legend.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

export default Legend
