import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, Speech, CommonImage } from '../../../../'

import styles from './ExceptBread.module.css'

const ExceptBread = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Кроме хлеба">
          <p>
            Железнодорожники в тылу трудились и день, и ночь — без выходных, как
            и вся страна. Рабочий день длился в среднем 12 часов, но нередко
            приходилось трудиться и сутки напролет.
            Многим зарплаты хватало лишь на одну дефицитную буханку хлеба. В
            июне 1943 года участились налеты немецких самолетов на управление
            Горьковской железной дороги. Во время бомбардировок железнодорожники
            проявляли небывалую стойкость: оставались до последнего на местах,
            делая свою работу.
          </p>
        </MainText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/gzhd/10/2.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/gzhd/10/1.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <Speech
          title="«Стоял запах крови и дыма»"
          author={{
            name:
              'Телеграфистка-бодистка 1-го разряда в годы войны Т. Канагина'
          }}
        >
          «Зарплата моя была 500 рублей: ее хватало на одну буханку хлеба на
          рынке из-под полы. Кроме хлеба почти ничего и не было. То, что
          получали по карточке из-за вредности работы на месяц, съедали за
          неделю. Как по расписанию в 23:00 появлялись осветительные ракеты и
          зловещий звук летящих бомбардировщиков. Кругом горели дома, стоял
          запах гари, крови и дыма. Мы не должны были ни при каких
          обстоятельствах покидать свои рабочие места. После смены получали
          приказ петь в госпитале, что расположился в здании Дворца культуры
          им. Ленина, для раненых. Мы и пели…».
        </Speech>
      </div>
    </div>
  )
}

export default ExceptBread
