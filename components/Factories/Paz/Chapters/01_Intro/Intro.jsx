import React from 'react'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Павловский завод автотракторного инструмента имени А. А. Жданова
          </h1>

          <p className={styles.desc}>ООО «Павловский автобусный завод»</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>Единственный</div>

            <div className={styles.rd}>завод</div>

            <div className={styles.what}>
              автотракторного инструмента в СССР в предвоенные годы
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>Единственный</div>

            <div className={styles.rd}>завод</div>

            <div className={styles.what}>
              шоферского инструмента для танковой промышленности в годы войны
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
