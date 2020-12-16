import React from 'react'
import cn from 'classnames'

import styles from '../../../../Intro.module.css'

const Intro = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Кулебакский металлургический завод</h1>

          <p className={styles.desc}>ПАО «Русполимет»</p>
        </div>

        <div className={styles.items}>
          <div className={cn(styles.item, styles.s)}>
            <div className={cn(styles.digit, styles.txt)}>крупнейший смежник</div>

            <div className={styles.what}>
              «Красного Сормова» и Горьковского автозавода в 1941–1945 годах
            </div>
          </div>
        </div>

        <div className={styles.items}>
        <div className={cn(styles.item, styles.s)}>
            <div className={cn(styles.digit, styles.txt)}>прочная лобовая броня Т-34</div>

            <div className={styles.what}>
              создана конструкторами завода № 178
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
