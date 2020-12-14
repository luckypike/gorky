import React from 'react'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>ГОРОДЕЦКАЯ СУДОВЕРФЬ</h1>

          <p className={styles.desc}>ПАО «Судоремонтно-судостроительная корпорация»</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>200 000</div>

            <div className={styles.rd}>КОРПУСОВ 50-ММ И 82-ММ МИН</div>

            <div className={styles.what}>изготовила судоверфь для фронта</div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>3 000</div>

            <div className={styles.rd}>ПОНТОНОВ</div>

            <div className={styles.what}>построено на предприятии в годы войны</div>
          </div>
        </div>
      </div>
    </div>
  )
}
