import React from 'react'
import cn from 'classnames'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Судоремонтный завод «Память Парижской Коммуны»</h1>

          <p className={styles.desc}>АО «Судоремонтный завод „Память Парижской Коммуны“»</p>
        </div>

        <div className={styles.items}>
          <div className={cn(styles.item)}>
            <div className={cn(styles.digit, styles.txt)}>Одно из крупнейших </div>

            <div className={styles.what}>ремонтных предприятий, готовивших суда для Волжской военной флотилии</div>
          </div>

          <div className={cn(styles.item)}>
            <div className={cn(styles.digit, styles.txt)}>{'Крупнейшее в области'}</div>

            <div className={styles.what}>производство по сборке аэросаней</div>
          </div>
        </div>
      </div>
    </div>
  )
}
