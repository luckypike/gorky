import React from 'react'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Государственный Завод № 469 имени М.М. Громова
          </h1>

          <p className={styles.desc}>АО ПКО «Теплообменник»</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>20</div>

            <div className={styles.rd}>дней</div>

            <div className={styles.what}>
              восстанавливали в Горьком эвакуированное из Солнечногорска
              производство
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>125</div>

            <div className={styles.rd}>радиаторов в сутки</div>

            <div className={styles.what}>выпускал завод в 1943 году</div>
          </div>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>250 000 +</div>

            <div className={styles.rd}>радиаторов</div>

            <div className={styles.what}>выпустил завод за годы войны</div>
          </div>
        </div>
      </div>
    </div>
  )
}
