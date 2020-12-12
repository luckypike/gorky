import React from 'react'
import PropTypes from 'prop-types'

import styles from './GunsOfWar.module.css'

const GunsOfWar = ({ title, img, children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.label}>Техника победы</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{children}</div>

      {/* <div className={styles.gun}>
        {img && <img className={styles.img} src={img} alt="img" />}
      </div> */}
    </div>
  )
}

GunsOfWar.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  img: PropTypes.string
}

export default GunsOfWar
