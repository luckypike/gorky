import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import styles from './NextFactory.module.css'

export default function NextFactory ({ title, desc, href }) {
  return (
    <div className={styles.root}>
      <Link href={href}>
        <a className={styles.a}>
          <div className={styles.desc}>
            {desc}
          </div>

          <div className={styles.title}>
            {title}
          </div>

          <div className={styles.next}>
            <div>Следующий завод</div>

            <div className={styles.arrow}>
              <svg width="1108" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1108 9.142L1098.46 0l-1.41 1.355L1103.98 8H-92v2h1196.28l-7.23 6.93 1.41 1.355 9.54-9.143z" fill="#fff" />
              </svg>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

NextFactory.propTypes = {
  href: PropTypes.string,
  desc: PropTypes.string,
  title: PropTypes.string
}
