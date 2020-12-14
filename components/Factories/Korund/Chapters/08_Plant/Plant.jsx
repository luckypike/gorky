import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImage } from '../../../../'

import styles from './Plant.module.css'

const Plant = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Завод «Корунд»">
          <p>
            После войны предприятие вернулось к производству корундов — искусственных минералов, которое ЧХЗ начал
            осваивать в 1936 году. Благодаря этому были получены первые кристаллы темно-красного рубина, отработаны
            технологии для производства александритов, сапфиров, аметистов и топазов. К середине 1950-х годов завод стал
            многопрофильным и выпускал в основном продукты неорганической химии, постепенно осваивая органическую
            продукцию. Тогда же химики завода произвели первый отечественный противотуберкулезный препарат ПАСК.
            Выпускал завод и бытовую химию, а затем освоил выпуск пенополиуретанов и ПВХ.
          </p>
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/korund/9/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Plant
