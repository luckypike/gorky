import React from 'react'

import styles from '../../../../Intro.module.css'

const Intro = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div>
          <h1 className={styles.title}>Выксунский металлургический завод</h1>

          <p className={styles.desc}>АО «Выксунский металлургический завод»</p>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>Единственный в СССР</div>

            <div className={styles.what}>
              цех электро­сварных труб действовал на заводе накануне войны
            </div>
          </div>
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.digit}>
              10 танков колонны «выксунский металлург»
            </div>

            <div className={styles.what}>
              построили за свой счет сотрудники ВМЗ
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
