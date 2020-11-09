import React from 'react'
import PropTypes from 'prop-types'

import styles from './Speech.module.css'

const Speech = ({ title, author, children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.intro}>Прямая речь</div>

        {title && <h3>{title}</h3>}

        {children && <div className={styles.text}>{children}</div>}
        {author && (
          <figure className={styles.author}>
            {author.image && (
              <img src={author.image} className={styles.image} alt="image" />
            )}

            <div className={styles.who}>
              {author.name}
              <br />
              <span>{author.desc}</span>
            </div>
          </figure>
        )}
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
