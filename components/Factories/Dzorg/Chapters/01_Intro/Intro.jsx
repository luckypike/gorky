import React from 'react'
import cn from 'classnames'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Дзержинский Завод № 148 «Рулон»</h1>

          <p className={styles.desc}>ОАО «Дзержинское оргстекло»</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={cn(styles.digit, styles.txt)}>
              {'Единственный в стране'}
            </div>

            <div className={styles.what}>
              производитель оргстекла в первый год войны
            </div>
          </div>

          <div className={styles.item}>
            <div className={cn(styles.digit, styles.txt)}>
              {'Первый завод в СССР'}
            </div>

            <div className={styles.what}>
              разработавший технологию производства бронированного стекла
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
