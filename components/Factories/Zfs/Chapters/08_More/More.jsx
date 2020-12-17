import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImages } from '../../../../'

import styles from './More.module.css'

const More = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Больше станков заводу">
          <p>
            Через несколько месяцев после начала войны стало очевидно, что
            основное направление завода — станкостроение — уходит на второй
            план. Заводу остро не хватало токарных станков малого и среднего
            габаритов. Чтобы покрыть этот дефицит, конструкторы завода в
            сентябре 1941 года спроектировали специальные станки на базе
            горизонтально-фрезерных станков. За два месяца их было изготовлено
            56 штук — больше, чем было нужно ГЗФС. 33 станка было передано
            другим предприятиям.
          </p>
        </MainText>

        <CommonImages>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/zfs/9/2.jpg" layout="fill" />
          </figure>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/zfs/9/3.jpg" layout="fill" />
          </figure>
        </CommonImages>
      </div>
    </div>
  )
}

export default More
