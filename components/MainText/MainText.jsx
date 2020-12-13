import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

import styles from './MainText.module.css'

const MainText = ({ title, children }) => {
  return (
    <div className={cn(styles.root, { [styles.void]: !children })}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {title}
        </h2>

        {children && (
          <div className={styles.text}>
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

MainText.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

export default MainText
