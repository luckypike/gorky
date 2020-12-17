import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {
  MainText,
  Speech,
  CommonText,
  CommonImages
} from '../../../../'

import styles from './Trajectory.module.css'

const Trajectory = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Траектория установлена">
          <p>
            По инициативе Е. Янкелевича, который в 1943 году стал главным
            конструктором завода, был спроектирован и запущен в производство
            модернизированный прибор «Обри» (МО-3), предназначенный для
            самонаводящейся акустической торпеды «С.А.Т».
          </p>

          <p>
            Оснащение военных кораблей этим прибором расширило тактические
            возможности торпедных стрельб. «Обри» позволял устанавливать углы
            отворота торпед с точностью до 10’ и стрелять залпом-веером, а также
            применять центральные пункты наводки с моторными приводами на
            кораблях и торпедных катерах.
          </p>
        </MainText>

        <CommonImages>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/petrovsky/7/1.jpg" layout="fill" />
          </figure>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/petrovsky/7/2.jpg" layout="fill" />
          </figure>
        </CommonImages>

        <CommonText>
          <p>
            В 1944 году завод продолжил совершенствование «Обри». Приборы
            получили шифры MO-4 и ПЯ («Прибор Янкелевича»). Они позволили
            добиться еще более точного хода торпеды по заданной траектории.
            В то же время был модернизирован универсальный прибор для управления
            корабельными и авиационными торпедами всех видов (УО-1). В нем был
            применен совершенно новый принцип управления авиационной высотной
            торпедой. С помощью УО-1 стало возможно регулирование хода торпеды
            по прямой, под углом до 90° вправо и влево, по кругу с выходом из
            центра, по расходящейся спирали с выходом из центра.
            Усовершенствованный прибор позволял осуществлять ход торпеды по
            любой заданной траектории.
          </p>
        </CommonText>

        <Speech
          title="«Девушки со временем не считались — и по 20 часов в сутки работали»"
          author={{
            name:
              'Бригадир молодежно-комсомольского цеха № 9 в годы войны В. Пашков: '
          }}
        >
          «Стали мы думать, как нам лучше отметить 25-летие Ленинского
          комсомола. И решили — досрочно выполнить годовую программу. Поработали
          мы крепко. Девушки со временем, конечно, не считались. Надо было — и
          по 20 часов в сутки работали. И за один месяц мы выполнили
          трехмесячную программу».
        </Speech>
      </div>
    </div>
  )
}

export default Trajectory
