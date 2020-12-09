import React from 'react'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Государственный автомобильный завод имени В. М. Молотова
          </h1>

          <p className={styles.desc}>ПАО ГАЗ, ООО «Автомобильный завод ГАЗ»</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>75%</div>

            <div className={styles.rd}>танков Т-70</div>

            <div className={styles.what}>произведенных за годы войны</div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>50%</div>

            <div className={styles.rd}>всех танков Т-60</div>

            <div className={styles.what}>в 1941–1942 годах</div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>52%</div>

            <div className={styles.rd}>грузовиков</div>

            <div className={styles.what}>
              выпущенных всеми заводами страны за годы войны
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>30%</div>

            <div className={styles.rd}>самоходно-артиллерийских установок</div>

            <div className={styles.what}>
              произведенных в СССР за годы войны
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
