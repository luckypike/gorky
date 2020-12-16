import React from 'react'
// import cn from 'classnames'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Дзержинский Завод № 80 {'имени Я. М. Свердлова'}</h1>

          <p className={styles.desc}>ФКП «Завод имени Я. М. Свердлова»</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>50%</div>

            <div className={styles.rd}>всех взрывчатых веществ</div>

            <div className={styles.what}>изготовленных в СССР в 1941–1945 годах</div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>3 МЛН +</div>

            <div className={styles.rd}>изделий</div>

            <div className={styles.what}>ежемесячно производилось на заводе</div>
          </div>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>5,6 МЛН</div>

            <div className={styles.rd}>авиабомб</div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>147 МЛН</div>

            <div className={styles.rd}>снарядов и мин</div>
          </div>
        </div>
      </div>
    </div>
  )
}
