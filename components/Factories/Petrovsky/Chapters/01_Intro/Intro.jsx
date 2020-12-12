import React from 'react'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Горьковский Завод № 215 имени Г. И. Петровского
          </h1>

          <p className={styles.desc}>ПАО «Завод имени Г. И. Петровского»</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>Единственный</div>

            <div className={styles.rd}>завод</div>

            <div className={styles.what}>
              производивший в годы войны приборы для минно-торпедного и
              трального вооружения ВМФ
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>Впервые</div>

            <div className={styles.rd}>в СССР</div>

            <div className={styles.what}>
              завод изготовил подлодочную плавающую трубную мину ПЛТ-2 для
              постановки подводных минных заградителей типа «Ленинец»
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
