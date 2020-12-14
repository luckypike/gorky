import React from 'react'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Городецкий механический завод</h1>

          <p className={styles.desc}>ООО «Городецкий судоремонтный завод»</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>250 000</div>

            <div className={styles.rd}>снарядов М-13</div>

            <div className={styles.what}>изготовил завод за годы войны</div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>950 000</div>

            <div className={styles.rd}>корпусов 50-мм и 82-мм мин</div>

            <div className={styles.what}>выпустили городчане для фронта</div>
          </div>
        </div>
      </div>
    </div>
  )
}
