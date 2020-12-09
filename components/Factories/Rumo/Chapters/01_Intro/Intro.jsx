import React from 'react'

import styles from '../../../../Intro.module.css'

const Intro = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div>
          <h1 className={styles.title}>ГОРЬКОВСКИЙ ЗАВОД № 718 «ДВИГАТЕЛЬ РЕВОЛЮЦИИ»</h1>

          <p className={styles.desc}>ОАО РУМО</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>25%</div>

            <div className={styles.rd}>ДИЗЕЛЬНЫХ ДВИГАТЕЛЕЙ В СССР</div>

            <div className={styles.what}>выпускал «Двигатель Революции» до войны</div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>ВЕДУЩИЙ</div>

            <div className={styles.rd}>производитель пушек</div>

            <div className={styles.what}>газовых двигателей в СССР</div>
          </div>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>56%</div>

            <div className={styles.rd}>ВСЕХ РЕАКТИВНЫХ СНАРЯДОВ</div>

            <div className={styles.what}>
              отправленных Горьковской областью на фронт, выпустил «Двигатель Революции»
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>ДВА</div>

            <div className={styles.rd}>ЭВАКУИРОВАННЫХ ЗАВОДА</div>

            <div className={styles.what}>принял «Двигатель Революции» на своей территории</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
