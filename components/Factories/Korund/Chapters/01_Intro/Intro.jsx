import React from 'react'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Чернореченский химический завод имени М. И. Калинина</h1>

          <p className={styles.desc}>ООО «Корунд»</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>18</div>

            <div className={styles.rd}>новых видов продукции</div>

            <div className={styles.what}>предприятие выпустило для обороны за 1941–1945 годы</div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>Основной </div>

            <div className={styles.rd}>поставщик</div>

            <div className={styles.what}>сырья для завода им. Я. М. Свердлова</div>
          </div>
        </div>
      </div>
    </div>
  )
}
