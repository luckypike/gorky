import React from 'react'
import PropTypes from 'prop-types'

import styles from './Speech.module.css'

const Speech = ({ title, author, children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.label}>Прямая речь</div>

        {title && <h3 className={styles.title}>{title}</h3>}

        <div className={styles.text}>
          {author && author.name && (
            <>
              <strong>
                {author.name}
                {author.name.slice(-1) !== ':' && ':'}
              </strong>
              <br />
            </>
          )}

          {children}
        </div>
      </div>
    </div>
  )
}

Speech.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  author: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string
  })
}

export default Speech
