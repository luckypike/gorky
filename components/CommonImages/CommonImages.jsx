import React from 'react'
import PropTypes from 'prop-types'

import styles from './CommonImages.module.css'

const CommonImages = ({ children }) => {
  return <div className={styles.root}>{children}</div>
}

CommonImages.propTypes = {
  children: PropTypes.node
}

export default CommonImages
