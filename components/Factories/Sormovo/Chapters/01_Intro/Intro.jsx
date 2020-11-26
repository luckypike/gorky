import React from 'react'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div>
        <h1 className={styles.title}>
          Завод № 112 «Красное сормово»
        </h1>

        <p className={styles.desc}>
          ПАО «Завод „Красное Сормово“»
        </p>
      </div>

      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.digit}>
            20%+
          </div>

          <div className={styles.rd}>
            Всех танков
          </div>

          <div className={styles.what}>
            поставил завод фронту за годы войны
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.digit}>
            3 млн.
          </div>

          <div className={styles.rd}>
            снарядов
          </div>

          <div className={styles.what}>
            для реактивных минометов «Катюша» и других боеприпасов «Красное Сормово» дало фронту
          </div>
        </div>
      </div>
    </div>
  )
}
