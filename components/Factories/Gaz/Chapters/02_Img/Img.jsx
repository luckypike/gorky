import React from 'react'

import {
  MainImage
} from '../../../../'

import styles from './Img.module.css'

const Img = () => {
  return (
    <figure className={styles.root}>
      <div className={styles.img}>
        <MainImage
          image="/images/gaz/img.jpg"
          alt="QQ"
          // layout="fill"
        />
      </div>
    </figure>
  )
}

export default Img
