import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../'

import styles from './DayBefore.module.css'

const DayBefore = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Накануне войны">
          <p>
            Строительство цехов компании Нижегородской машинной фабрики и Волжского буксирного и завозного пароходства,
            ставших после революции «Красным Сормовом», началось в 1849 году.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles.main)}>
              <Image src="/images/sormovo_sudo/3/2.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </MainText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            В мае 1850 года со стапелей сошло первое судно — пароход «Ласточка», а два года спустя фабрика построила
            первое судно с металлическим корпусом — пароход «Орел».
          </p>
          <p>
            К началу XX века завод выпускал уже не только суда, но и паровозы, вагоны, листовое, прокатное и сортовое
            железо.
          </p>
          <p>
            Подводные лодки на предприятии впервые стали делать в 1930-х годах. Кроме «Красного Сормова» на Волге их
            никто не выпускал. Первую подлодку Военно-морскому флоту передали в 1934 году. Это была разработанная в
            Ленинграде лодка типа «Щука» третьей серии Щ-304. Средства на строительство собирали комсомольцы со всего
            СССР, поэтому она получила название «Комсомолец».
          </p>
          <p>
            До начала Великой Отечественной войны «Красное Сормово» построило 11 подводных лодок типа «Щука», 21
            подводную лодку типа «С» IX-бис и 22 подлодки типа М — «Малютка».
          </p>
        </CommonText>
        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/sormovo_sudo/3/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/sormovo_sudo/3/3.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default DayBefore
