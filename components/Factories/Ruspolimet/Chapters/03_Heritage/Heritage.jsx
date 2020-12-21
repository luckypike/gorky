import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainImage, MainText, CommonText, CommonImages } from '../../../../'

import styles from './Heritage.module.css'

const Heritage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainImage>
          <figure className={classNames(styles.img, styles.intro)}>
            <Image src="/images/ruspolimet/img.jpg" layout="fill" />
          </figure>
        </MainImage>

        {/* <MainImage>
          <figure className={classNames(styles.img, styles.intro)}>
            <Image src="/images/ruspolimet/img.jpg" layout="fill" />
          </figure>
        </MainImage> */}

        <MainText title="Наследие братьев Струве">
          <p>
            Кулебакский металлургический завод (КМЗ) был основан помещиком
            Николаем Федоровым, владевшим имением в селе Кулебаки, и выксунским
            купцом Алексеем Бородачевым в 1866 году. Предприятие побывало в
            собственности у англичан, но развилось благодаря перекупившим его
            инженерам и предпринимателям братьям Струве в XIX веке.
          </p>
        </MainText>

        <CommonImages>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/ruspolimet/3/1.jpg" layout="fill" />
            <figcaption>
              Машина, доставлявшая рабочих на Кулебакский горный завод. У проходной завода. Конец 1920 — начало 1930-х годов
            </figcaption>
          </figure>

          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/ruspolimet/3/2.jpg" layout="fill" />
            <figcaption>
              Летний ресторан в парке Кулебак. Конец 1920 — начало 1930 годов
            </figcaption>
          </figure>
        </CommonImages>

        <CommonText>
          <p>
            К 1930-м годам основной продукцией предприятия стали бандажи —
            съемные стальные профилированные кольца, надеваемые на обод
            железнодорожного колеса. В 1932 году на модернизацию производства
            было выделено 12 млн руб. В первые пятилетки на заводе работали
            мартеновские печи, были установлены новые нагревательные,
            термические печи и бандажепрокатный стан. Предприятие отливало сталь
            для судостроения, общего машиностроения, энергетики.
          </p>
          <p>
            Среди заказчиков Кулебакского металлургического завода были
            Горьковский автозавод, ДнепроГЭС, Беломорско-Балтийский канал и
            московское метро. В 1940 году на заводе был запущен новый
            термический цех, заменивший старые обжигательные мастерские. В
            начале 1940-х на Кулебакском металлургическом заводе модернизировали
            листопрокатный и сортопрокатный цехи, смонтировали новый
            слиткоразрезной пролет в бандажепрокатном цехе.
          </p>
        </CommonText>
      </div>
    </div>
  )
}

export default Heritage
