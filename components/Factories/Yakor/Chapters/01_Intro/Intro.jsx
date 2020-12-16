import React from 'react'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Горьковский завод № 646 {'«Красный якорь»'}</h1>

          <p className={styles.desc}>АО «Завод „Красный якорь“»</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>370 000</div>

            <div className={styles.rd}>специальных цепей</div>

            <div className={styles.what}>для автобронетанковых частей</div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>9100</div>

            <div className={styles.rd}>комплектов металлоукладочных изделий</div>

            <div className={styles.what}>для горного миномета</div>
          </div>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>30 000</div>

            <div className={styles.rd}>специальных якорей</div>

            <div className={styles.what}>для инженерных частей</div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>Eдинственный завод в СССР</div>

            <div className={styles.what}>
              изготавливавший в первые годы войны цепи противоскольжения для автомобилей и конские минометные вьюки
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
