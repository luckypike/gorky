import React from 'react'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div>
          <h1 className={styles.title}>Завод № 119 имени Г. М. Маленкова</h1>

          <p className={styles.desc}>НПАО «Гидромаш»</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>Первый</div>

            <div className={styles.rd}>в СССР</div>

            <div className={styles.what}>
              производитель убирающихся шасси для истребителей,
              бомбардировщиков, пассажирских самолетов
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>Единственный</div>

            <div className={styles.rd}>в стране</div>

            <div className={styles.what}>
              действующий производитель шасси для истребителей и пикирующих
              бомбардировщиков в конце 1941 года
            </div>
          </div>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>На каждом</div>

            <div className={styles.rd}>шестом самолете</div>

            <div className={styles.what}>
              в военное время стояли шасси завода
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>22 000</div>

            <div className={styles.rd}>комплектов шасси</div>

            <div className={styles.what}>выпустил завод за годы войны</div>
          </div>
        </div>
      </div>
    </div>
  )
}
