import React from 'react'
import cn from 'classnames'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Горьковский Завод фрезерных станков №113
          </h1>

          <p className={styles.desc}>ЗАО «Завод фрезерных станков»</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={cn(styles.digit, styles.txt)}>
              Головное предприятие
               <br />
              СССР
            </div>

            <div className={styles.what}>по производству ППШ с 1942 года</div>
          </div>

          <div className={styles.item}>
            <div className={cn(styles.digit, styles.txt)}>Один из ведущих заводов-смежников</div>

            <div className={styles.what}>
              по производству узлов для танка Т-34
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
