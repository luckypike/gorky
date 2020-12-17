import React from 'react'
import cn from 'classnames'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Мордовщиковский судомостостроительный завод № 342</h1>

          <p className={styles.desc}>АО «Окская судоверфь»</p>
        </div>

        <div className={styles.items}>
          <div className={cn(styles.item, styles.s)}>
            <div className={cn(styles.digit, styles.txt)}>ПЕРВАЯ СУДОВЕРФЬ В СССР</div>

            <div className={styles.rd}>освоившая крупнотоннажное</div>

            <div className={styles.what}>сварное судостроение</div>
          </div>

          <div className={cn(styles.item, styles.s)}>
            <div className={cn(styles.digit, styles.txt)}>ЕДИНСТВЕННЫЙ ПРОИЗВОДИТЕЛЬ</div>

            <div className={styles.what}>понтонно-мостовых переправ длявоенных в годы войны и до сих пор </div>
          </div>
        </div>
      </div>
    </div>
  )
}
