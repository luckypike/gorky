import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../'

import styles from './ZIS2.module.css'

const ZIS2 = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="ЗИС-2: мощь без цели">
          <p>
            Первым противотанковым орудием собственной разработки КБ завода № 92 стала 57-мм пушка ЗИС-2, проектирование
            которой началось в 1940 году. До этого, как пишет А. Б. Широкорад в своей работе «Гений советской
            артиллерии. Триумф и трагедия В. Грабина», конструктор не занимался противотанковой артиллерией — это
            направление было закреплено за подмосковным заводом им. Калинина.
          </p>
          <CommonImage>
            <figure className={classNames(styles.img, styles.main)}>
              <Image src="/images/nmz/8/2.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </MainText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            В 1941 году ни одна армия мира не имела противотанковой пушки калибром 57 мм, сопоставимой по мощности с
            ЗИС-2. Советская пушка, например, превосходила английскую 57-мм пушку в 1,6 раза. Эта небывалая мощь и стала
            причиной снятия орудия с производства (оно продолжалось меньше года) — для ЗИС-2 на тот момент просто не
            было достойных целей.
          </p>
          <p>
            В своих воспоминаниях об этом В. Г. Грабин почти дословно передавал свой телефонный разговор с И. В.
            Сталиным — генсек настаивал на укорачивании ствола пушки, которая «очень мощна» и «все немецкие танки для
            этой пушки ничего не стоят». «Укорачивать ствол пушки нерационально, так как она потеряет свои высокие
            боевые качества как противотанковое орудие и в этом случае может быть легко заменена 76-мм дивизионной
            пушкой, а укороченная ЗИС-2 не заменит дивизионную, так как у нее очень слабый фугасный снаряд. Этим пушку
            мы только испортим», — объяснял конструктор верховному главнокомандующему, но тот все-таки снял ее с
            производства.
          </p>
          <p>
            Через год вновь встал вопрос о возобновлении производства пушки ЗИС-2 — к тому времени у Германии появился
            тяжелый танк «Тигр», и нужно было орудие, которое на дистанции 1000 м пробивало бы броню толщиной 90 мм.
            ЗИС-2 показывала себя успешно в боях вплоть до самой победы (за годы войны на фронт поступило больше 10 тыс.
            ЗИС-2) и выпускалась до 1949 года.
          </p>
        </CommonText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/nmz/8/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default ZIS2
