import React from 'react'
import cn from 'classnames'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Горьковский Завод № 215 {'имени Г. И. Петровского'}
          </h1>

          <p className={styles.desc}>ПАО «Завод имени Г. И. Петровского»</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={cn(styles.digit, styles.txt)}>Единственный завод</div>

            <div className={styles.what}>
              производивший в годы войны приборы для минно-торпедного и
              трального вооружения ВМФ
            </div>
          </div>

          <div className={styles.item}>
            <div className={cn(styles.digit, styles.txt)}>Впервые в СССР</div>

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
