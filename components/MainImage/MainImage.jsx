import React from 'react'
import PropTypes from 'prop-types'

import styles from './MainImage.module.css'

const MainImage = ({ children, caption }) => {
  return <div className={styles.root}>{children}</div>
}

MainImage.propTypes = {
  children: PropTypes.node,
  caption: PropTypes.string
}

export default MainImage
