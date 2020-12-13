import React from 'react'
import cn from 'classnames'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Завод № 119 имени Г. М. Маленкова</h1>

          <p className={styles.desc}>НПАО «Гидромаш»</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={cn(styles.digit, styles.txt)}>Первый в СССР</div>

            <div className={styles.what}>
              производитель убирающихся шасси для истребителей,
              бомбардировщиков, пассажирских самолетов
            </div>
          </div>

          <div className={styles.item}>
            <div className={cn(styles.digit, styles.txt)}>Единственный в стране</div>

            <div className={styles.what}>
              действующий производитель шасси для истребителей и пикирующих
              бомбардировщиков в конце 1941 года
            </div>
          </div>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={cn(styles.digit, styles.txt)}>
              На каждом
              <br />
              шестом самолете
            </div>

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
