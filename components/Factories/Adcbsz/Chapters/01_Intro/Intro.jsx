import React from 'react'
import cn from 'classnames'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Горьковский механизированный стеклозавод имени М. Горького
          </h1>

          <p className={styles.desc}>
            ОАО «Эй Джи Си Борский стекольный завод»
          </p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={cn(styles.digit, styles.txt)}>Главный поставщик</div>

            <div className={styles.what}>
              броневого стекла для самолетов, танков и автомобилей Великой
              Отечественной войны
            </div>
          </div>

          <div className={styles.item}>
            <div className={cn(styles.digit, styles.txt)}>Единственный производитель</div>

            <div className={styles.what}>сигнальных маячных линз для Военно-морского флота в годы войны</div>
          </div>
        </div>
      </div>
    </div>
  )
}
