import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './CommonImages.module.css'

const CommonImages = ({ children, middle }) => {
  return <div className={cn(styles.root, { [styles.middle]: middle })}>{children}</div>
}

CommonImages.propTypes = {
  children: PropTypes.node,
  middle: PropTypes.bool
}

export default CommonImages
