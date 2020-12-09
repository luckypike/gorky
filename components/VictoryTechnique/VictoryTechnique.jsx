import React from 'react'
import PropTypes from 'prop-types'

import styles from './VictoryTechnique.module.css'

const WarTechnique = ({ title, children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.technique}>ТЕХНИКА ПОБЕДЫ</div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.desc}>
          <ol>{children}</ol>
        </div>
      </div>
    </div>
  )
}

WarTechnique.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

export default WarTechnique
