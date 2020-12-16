import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImage, CommonText, CommonImages } from '../../../../'

import styles from './Expands.module.css'

const Expands = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Комбинат разрастается">
          <p>
            В 1947 году по решению Министерства народного хозяйства начали строить маргариновый завод вблизи второй
            территории масложиркомбината рядом с мыловаренным заводом № 2. В 1949-м его запустили в эксплуатацию, а в
            1951-м на нем началось производство майонеза — была выпущена первая пробная партия майонеза «Провансаль».
            Постепенно объемы производства на заводе растут, осваиваются новые виды продукции. В 1979 году в Горьком
            ввели в эксплуатацию завод по производству пищевых поверхностно-активных веществ, к которым относятся
            эмульгаторы для хлебопекарной и кондитерской отрасли. Они позволяют заменить или снизить расход более
            дорогих компонентов.
          </p>
        </MainText>

        <CommonImages>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/nmjk/7/2.jpg" layout="fill" />
            <figcaption>Линия розлива растительного масла в поллитровые бутылки</figcaption>
          </figure>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/nmjk/7/3.jpg" layout="fill" />
            <figcaption>Руководители строительства маргаринового завода</figcaption>
          </figure>
        </CommonImages>

        <CommonText>
          <p>
            Сегодня в группу компаний НМЖК входит перерабатывающий масложировой комбинат в Нижнем Новгороде,
            маслоэкстракционные заводы в Урюпинске и Сорочинске, элеваторы в Волгоградской, Оренбургской, Самарской,
            Саратовской областях и в Республике Башкортостан.
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/nmjk/7/1.jpg" layout="fill" />
            <figcaption>Главный корпус маргаринового завода перед вводом в эксплуатацию</figcaption>
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Expands
