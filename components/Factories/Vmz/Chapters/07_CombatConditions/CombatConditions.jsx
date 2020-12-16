import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../'

import styles from './CombatConditions.module.css'

const CombatConditions = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Модернизация в боевых условиях">
          Листопрокатный цех уже имел опыт прокатки тонких броневых листов
          толщиной 4,6мм, но чтобы справиться с заданиями военного времени,
          пришлось провести модернизацию оборудования. За сутки цех давал до
          300 т броневого листа.
          В 1941 году заводской план по спецпрокату удалось выполнить на
          626,5%. Броневые листы Выксунского металлургического завода шли на
          днище и заднюю часть корпуса Т-34, а также на легкие танки и СУ-76,
          броневики и бронепоезда. В 1944 году в цехе проводили капитальный
          ремонт. Чтобы обеспечить прокатку более толстых листов, удлинили
          пролет, стан №1 убрали совсем, у стана №2 усилили фундамент,
          установили новый электродвигатель. Учитывая жесткий план, ремонт
          вместо 46 дней провели {'за 43'}.
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/vmz/7/1.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            Модернизацию трубного цеха проводили в 1943 году, чтобы подготовить
            оборудование для производства труб диаметром 200–250 мм с толщиной
            стенки до 4мм, сваренных внакладку, для реактивных артиллерийских
            установок «Катюша» и «Андрюша».
          </p>

          <p>
            В годы войны оборонные заказы выполняли почти все цехи.
            Вилопрокатный изготавливал саперные лопатки, кроватный — кровати для
            госпиталей и корпуса осветительных ракет для аэродромов.
          </p>
        </CommonText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/vmz/7/2.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._3)}>
            <Image src="/images/vmz/7/4.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/vmz/7/3.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default CombatConditions
