import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainImage, MainText, CommonText, CommonImages } from '../../../../'

import styles from './StrategicMove.module.css'

const StrategicMove = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainImage>
          <figure className={classNames(styles.img, styles.intro)}>
            <Image src="/images/gzhd/img.jpg" layout="fill" />
          </figure>
        </MainImage>

        <MainText title="Cтратегический ход">
          <p>
            Горьковская железная дорога (ГЖД) — одна из старейших
            железнодорожных магистралей. Открытие линии Москва — Нижний Новгород
            совпало с расцветом Нижегородской ярмарки — стратегически важного
            торжища Российской империи.
            Проект строительства железной дороги был утвержден в 1857 году,
            линия проходила через Москву, Покров, Владимир, Ковров, Вязники,
            Гороховец и Нижний Новгород. К возведению дороги привлекались
            вольнонаемные рабочие и крестьяне из прилегающих губерний.
          </p>
        </MainText>

        <CommonImages>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/gzhd/3/2.jpg" layout="fill" />
          </figure>

          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/gzhd/3/1.jpg" layout="fill" />
          </figure>
        </CommonImages>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Первый поезд с пассажирами из Нижнего Новгорода в Москву отправился
            1 августа 1862 года. Дата была выбрана неслучайно: начало движения
            по новой железной дороге было приурочено к ежегодному открытию
            Нижегородской ярмарки.
          </p>

          <p className={styles.vrezka}>
            Первый поезд с пассажирами из Нижнего Новгорода в Москву отправился
            1 августа 1862 года
          </p>

          <p>
            В январе 1894 года Московско-Нижегородская железная дорога вместе с
            Муромской вошла в состав Московско-Курской железной дороги, где
            находилась до 1936 года. По приказу Народного комиссариата путей
            сообщения в 1936 году из состава Московско-Курской железной дороги
            были образованы Казанская и Горьковская железные дороги.
          </p>
        </CommonText>
      </div>
    </div>
  )
}

export default StrategicMove
