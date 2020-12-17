import React from 'react'
import cn from 'classnames'

import styles from '../../../../Intro.module.css'

export default function Intro () {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Завод № 645 {'имени В. И. Ульянова'}</h1>

          <p className={styles.desc}>ЗАО «Концерн „Термаль“»</p>
        </div>

        <div className={styles.items}>
          <div className={cn(styles.item)}>
            <div className={cn(styles.digit, styles.txt)}>Единственный производитель</div>

            <div className={styles.what}>
              специальной электроаппаратуры для судостроения, береговых
              установок и кораблей ВМФ в СССР
            </div>
          </div>

          <div className={cn(styles.item)}>
            <div className={cn(styles.digit, styles.txt)}>Один из крупнейших</div>

            <div className={styles.what}>
              производителей трубчатых электронагревателей — тэнов — в СССР
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
