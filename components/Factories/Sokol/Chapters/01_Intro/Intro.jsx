import React from 'react'
import cn from 'classnames'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            {'ГОРЬКОВСКИЙ АВИАСТРОИТЕЛЬНЫЙ ЗАВОД № 21 ИМЕНИ С. ОРДЖОНИКИДЗЕ'}
          </h1>

          <p className={styles.desc}>
            Нижегородский авиастроительный завод «Сокол» — филиал АО «РСК „МиГ“»
          </p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>19 202</div>

            <div className={styles.rd}>истребителя</div>

            <div className={styles.what}>построено в Горьком за годы войны</div>
          </div>

          <div className={styles.item}>
            <div className={cn(styles.digit, styles.txt)}>Каждый третий истребитель</div>

            <div className={styles.what}>для фронта выпустил авиазавод</div>
          </div>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>26</div>

            <div className={styles.rd}>самолетов в сутки</div>

            <div className={styles.what}>
              выпускал Горьковский авиазавод к 1944 году
            </div>
          </div>

          <div className={styles.item}>
            <div className={cn(styles.digit, styles.txt)}>Первый в СССР</div>

            <div className={styles.what}>
              завод, который изначально специализировался навыпуске
              самолетов-истребителей
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
