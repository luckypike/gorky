import React from 'react'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Горьковский Завод № 197 имени В. И. Ленина
          </h1>

          <p className={styles.desc}>
            ПАО «Нижегородский телевизионный завод имени В. И. Ленина»
          </p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>112 000</div>

            <div className={styles.rd}>комплектов переговорных устройств </div>

            <div className={styles.what}>
              для самолетов, танков и кораблей передало предприятие фронту в
              1941–1945 годах
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>178 000</div>

            <div className={styles.rd}>комплектов радиостанций</div>

            <div className={styles.what}>
              более 50 типов поставил завод на фронт за годы войны
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>234 800</div>

            <div className={styles.rd}>полевых телефонных аппаратов</div>

            <div className={styles.what}>произвел завод за годы войны</div>
          </div>
        </div>
      </div>
    </div>
  )
}
