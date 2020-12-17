import React from 'react'
import cn from 'classnames'

import styles from '../../../../Intro.module.css'

const Intro = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Горьковский Завод № 326 {'имени М. В. Фрунзе'}
          </h1>

          <p className={styles.desc}>
            ПАО «Нижегородское НПО имени М. В. Фрунзе»
          </p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>60%</div>

            <div className={styles.rd}>радиостанций</div>

            <div className={styles.what}>
              от общего выпуска в СССР в годы войны приходилось на заводы им.
              Фрунзе и им. Ленина
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>30 000 +</div>

            <div className={styles.rd}>радиостанций типа 12-РП и 12-РТ</div>

            <div className={styles.what}>
              самой популярной в Красной Армии, произвел завод им. Фрунзе в годы
              войны
            </div>
          </div>
        </div>

        <div className={styles.items}>
          <div className={cn(styles.item)}>
            <div className={cn(styles.digit, styles.txt)}>Танковые радиостанции 12-РТ</div>

            <div className={styles.what}>
              завода им. М. В. Фрунзе в значительной степени определили исход
              крупнейшего в истории танкового сражения под Прохоровкой
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
