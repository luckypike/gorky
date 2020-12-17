import React from 'react'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>{'Горьковский Завод № 112 «Красное Сормово»'}</h1>

          <p className={styles.desc}>ПАО «Завод „Красное Сормово“»</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>43%</div>

            <div className={styles.rd}>подводных лодок</div>

            <div className={styles.what}>выпустил завод за годы войны</div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>22</div>

            <div className={styles.rd}>подлодки</div>

            <div className={styles.what}>завод построил за время войны</div>
          </div>
        </div>
      </div>
    </div>
  )
}
