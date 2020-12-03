import React from 'react'

import styles from '../../../../Intro.module.css'

const Intro = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div>
          <h1 className={styles.title}>ГОРЬКОВСКАЯ ЖЕЛЕЗНАЯ ДОРОГА</h1>

          <p className={styles.desc}>
            Горьковская железная дорога — филиал ОАО РЖД
          </p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>885 000</div>

            <div className={styles.rd}>МОБИЛИЗОВАННЫХ И ДОБРОВОЛЬЦЕВ</div>

            <div className={styles.what}>
              было доставлено на фронт в годы войны из Горьковской области
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>2 400 КМ</div>

            <div className={styles.rd}>ОТ ВОЛГИ ДО ОДЕРА</div>

            <div className={styles.what}>
              прошел 31-й отдельный Горьковский дивизион бронепоездов «Козьма
              Минин» и «Илья Муромец
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>505 000</div>

            <div className={styles.rd}>
              РАНЕНЫХ БОЙЦОВ И КОМАНДИРОВ КРАСНОЙ АРМИИ
            </div>

            <div className={styles.what}>
              перевезли Горьковские железнодорожники
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.digit}>ПЕРВЫМ В МИРЕ</div>

            <div className={styles.what}>
              31-й дивизион получил на вооружение реактивную артиллерию
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
