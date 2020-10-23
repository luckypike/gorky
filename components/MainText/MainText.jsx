import React from 'react'
import PropTypes from 'prop-types'

import styles from './MainText.module.css'

const MainText = ({ title, body }) => {
  return (
    <div className={styles.root}>
      <h2>
        {title}
      </h2>

      <div className={styles.text}>
        {body}
      </div>
    </div>
  )
}

MainText.propTypes = {
  title: PropTypes.string,
  body: PropTypes.node
}

export default MainText;
