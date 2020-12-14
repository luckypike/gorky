import React from 'react'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Дзержинский Завод № 96</h1>

          <p className={styles.desc}>ОАО «Капролактам» (ликвидировано)</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>79%</div>

            <div className={styles.rd}>люизита</div>

            <div className={styles.what}>произвел завод от общего объема выпуска всех предприятий страны</div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>66%</div>

            <div className={styles.rd}>иприта</div>

            <div className={styles.what}>выпустил завод от общего объема производства в СССР в годы войны</div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>Крупнейшее</div>

            <div className={styles.rd}>химическое предприятие</div>

            <div className={styles.what}>на территории СССР в годы Великой Отечественной войны</div>
          </div>
        </div>
      </div>
    </div>
  )
}
