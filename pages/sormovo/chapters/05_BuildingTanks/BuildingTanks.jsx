import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {
  MainText,
  CommonText,
  CommonImage,
  Speech
} from '../../../../components'

import styles from './BuildingTanks.module.css'

const BuildingTanks = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Судостроители строят танки">
          Первые танки сормовичи поставили на фронт в октябре 1941 года. Перед
          отправкой каждый танк проходил огневые и ходовые испытания — пробеги
          по 30 и 50 км. Испытателем танков работал и шестнадцатилетний сын
          директора завода Ефима Рубинчика — Александр Рубинчик.
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/sormovo/5/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            С сентября по декабрь 1941 года завод передал фронту 173 танка.
            Чтобы снизить зависимость от заводов-смежников, которые поставляли
            комплектующие для Т-34, «Красное Сормово» самостоятельно стало
            изготавливать некоторые детали. В том числе в 1942 году предприятие
            стало выпускать траки — звенья гусеничной ленты, тем самым освободив
            от этой нагрузки Горьковский автозавод.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/sormovo/5/4.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <Speech
            title="«С огромными трудностями встретились сормовичи»"
            author={{
              name: 'Директор завода «Красное Сормово» в 1942–1949 гг. Е. Э. Рубинчик'
            }}
          >
            «Надо понять те огромные трудности, с которыми встретились сормовичи
            при организации серийного производства танков. Надо было создавать
            принципиально рабочую технологию такого сложного объекта, каким
            является танк Т-34, перевести организацию цехов и участков на
            серийное производство, строить новые цехи, каких до сего времени не
            было на сормовском заводе».
          </Speech>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            В 1942 году война пришла в Сталинград, и местный завод больше не мог
            выпускать танки. План производства Т-34 перераспределили между
            другими предприятиями Советского Союза, и сормовский завод № 112
            должен был выпускать на 50 танков в месяц больше. К тому моменту на
            «Красном Сормове» технология производства танков была уже
            отработанной, и завод стал сдавать в среднем по десять машин в день.
            сталеваров.
          </p>
          <p>
            Достичь этого удалось благодаря самоотверженному труду рабочих.
            Знания передавались от мастера к ученикам, ветераны обучали новых
            специалистов прямо на производстве. Только за 1942 год они
            подготовили около 7,5 тыс. молодых сотрудников — токарей,
            формовщиков, слесарей и сталеваров.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._2)}>
              <Image src="/images/sormovo/5/1.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <Speech
          title="«Вас не будет — танков не будет»"
          author={{
            name: 'Испытатель танков на «Красном Сормове» в годы войны А. Сухонин'
          }}
        >
          «Нас учили на слесарей. Четыре часа в день отводилось на теорию,
          четыре — на практику. Практику проходили в цехе школы ФЗУ на заводе.
          Нам, мальчишкам, дали четвертый разряд и отправили в корпусный цех №
          43 — на сборку танков. Заводу нужны были сварщики. И за месяц нас из
          слесарей сделали сначала прихватчиками, а потом и сварщиками! Мы были
          ловкие, юркие, худущие. В любую щель могли пролезть. Нас начальники за
          это любили, говорили: „Вас не будет — танков не будет!“ … После сборки
          каждый танк Т-34 должен был пройти два испытательных пробега. Первый —
          заводской, 30 километров — до Козино и обратно. Второй пробег —
          военпредовский, 50 километров — до Лукино и обратно. Каждый из
          13 тысяч построенных на заводе танков прошли эти 80 километров!
          Выявленные во время пробегов неисправности исправлял водитель — в
          любой мороз и в любую непогоду. Работали сутки через сутки».
        </Speech>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._3)}>
            <Image src="/images/sormovo/5/3.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default BuildingTanks
