import React from 'react'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div>
          <h1 className={styles.title}>Павловский завод № 467</h1>

          <p className={styles.desc}>АО «Гидроагрегат»</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>40</div>

            <div className={styles.rd}>винтов в сутки</div>

            <div className={styles.what}>выпускал завод в 1942 году</div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>1/3</div>

            <div className={styles.rd}>самолетов</div>

            <div className={styles.what}>
              выпущенных в СССР во время войны, оснащалась винтами завода
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
