import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImage } from '../../../../'

import styles from './AfterWar.module.css'

const AfterWar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="После войны">
          <p>
            В послевоенные годы завод «Красная Этна» сосредоточился на своем
            основном мирном профиле — производстве крепежа для автомобильной
            промышленности. Предприятие пережило несколько переименований,
            непростые периоды экономических кризисов, но остается крупным
            поставщиком нормалей для производителей автомобильной техники и
            комплектующих к ней.
          </p>

          <p>
            К настоящему времени на «Красной Этне» освоен полный
            производственный цикл: от проектирования до гальванопокрытия и
            упаковки. Работают восемь цехов основного производства, есть
            собственные инструментальное и станкостроительное производства, две
            исследовательские лаборатории.
          </p>
        </MainText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/etna/8/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default AfterWar
