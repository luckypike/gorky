import React from 'react'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div>
          <h1 className={styles.title}>
            Горьковский механизированный стеклозавод имени М. Горького
          </h1>

          <p className={styles.desc}>
            ОАО «Эй Джи Си Борский стекольный завод»
          </p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>Главный</div>

            <div className={styles.rd}>поставщик</div>

            <div className={styles.what}>
              броневого стекла для самолетов, танков и автомобилей Великой
              Отечественной войны
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>Единственный</div>

            <div className={styles.rd}>производитель</div>

            <div className={styles.what}>сигнальных маячных линз для Военно-морского флота в годы войны</div>
          </div>
        </div>
      </div>
    </div>
  )
}
