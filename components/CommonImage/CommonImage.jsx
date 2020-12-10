import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './CommonImage.module.css'

const CommonText = ({ children, content }) => {
  return <div className={cn(styles.root, { [styles.content]: content })}>{children}</div>
}

CommonText.propTypes = {
  children: PropTypes.node,
  content: PropTypes.bool
}

export default CommonText
