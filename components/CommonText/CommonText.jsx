import React from 'react'
import PropTypes from 'prop-types'

import styles from './CommonText.module.css'

const CommonText = ({ children }) => {
  // const elements = React.Children.toArray(children)

  // elements.forEach((e, i) => {
  //   if (typeof e.props.children === 'string') {
  //     const newString = e.props.children.replaceAll('-', '–')
  //     console.log(newString)
  //     elements[i] = React.cloneElement(e, { children: newString })
  //   }
  // })

  return <div className={styles.root}>{children}</div>
}

CommonText.propTypes = {
  children: PropTypes.node
}

export default CommonText
