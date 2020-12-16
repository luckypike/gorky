import React from 'react'
import cn from 'classnames'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Горьковский жиркомбинат {'имени С. М. Кирова'}</h1>

          <p className={styles.desc}>АО НМЖК</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>1/2</div>

            <div className={styles.rd}>динамитного глицерина</div>

            <div className={styles.what}>произведенного в СССР, делал Горьковской жиркомбинат</div>
          </div>

          <div className={styles.item}>
            <div className={cn(styles.digit, styles.txt)}>Первый по объему производства</div>

            <div className={styles.what}>твердого туалетного мыла в России</div>
          </div>

          <div className={cn(styles.item)}>
            <div className={cn(styles.digit, styles.txt)}>Поставщик саломаса</div>

            <div className={styles.what}>— твердого жира — для осажденного Ленинграда</div>
          </div>

          <div className={cn(styles.item)}>
            <div className={cn(styles.digit, styles.txt)}>Производитель водорода</div>

            <div className={styles.what}>для аэростатов горьковской ПВО</div>
          </div>
        </div>
      </div>
    </div>
  )
}
