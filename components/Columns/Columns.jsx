import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './Columns.module.css'

const Columns = ({ left, right, content, className }) => {
  return (
    <div className={cn(className, styles.root, { [styles.content]: content })}>
      <div>
        {left}
      </div>

      <div>
        {right}
      </div>
    </div>
  )
}

Columns.propTypes = {
  className: PropTypes.string,
  left: PropTypes.node,
  right: PropTypes.node,
  content: PropTypes.bool
}

export default Columns
