import React from 'react'

import styles from '../../../../Intro.module.css'

const Intro = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Горьковский машино­строительный Завод № 92 {'имени И. В. Сталина'}</h1>

          <p className={styles.desc}>АО «Нижегородский машиностроительный завод»</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>1/4</div>

            <div className={styles.rd}>всей артиллерии</div>

            <div className={styles.what}>изготовил завод в годы войны</div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>100</div>

            <div className={styles.rd}>пушек</div>

            <div className={styles.what}>в сутки выпускал завод к 1943 году</div>
          </div>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>100 000 +</div>

            <div className={styles.rd}>орудий</div>

            <div className={styles.what}>
              выпустил завод за годы войны — больше, чем все страны гитлеровской коалиции
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>18 +</div>

            <div className={styles.rd}>раз увеличил завод ежесуточный выпуск</div>

            <div className={styles.what}>орудий с 1941-го по 1942 год</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
