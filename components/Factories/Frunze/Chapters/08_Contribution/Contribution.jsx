import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, Columns, CommonImage } from '../../../../'

import styles from './Contribution.module.css'

const Contribution = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Вклад в победу" />

        <Columns
          left={
            <div>
              <figure className={classNames(styles.img, styles.main)}>
                <Image src="/images/frunze/9/1.jpg" layout="fill" />
                <figcaption>Орден Трудового Красного Знамени</figcaption>
              </figure>
            </div>
          }
          right={
            <div>
              <p>
                В 1943 году завод имени М. В. Фрунзе выпустил для армии 3 тыс. радиоизмерительных приборов, 7,6 тыс.
                радиостанций 12-РП и 5,7 тыс. танковых радиостанций 12-РТ. За выполнение этого заказа Государственного
                комитета обороны заводу вручили переходящее Красное знамя ГКО и денежную премию в размере 150 тыс. руб.
                21 января 1944 года указом Президиума Верховного Совета СССР 14 работников завода были награждены
                орденами и медалями. В числе награжденных были директор завода Н.В. Добров, главный инженер А. П.
                Скибарко, главный конструктор А. П. Горшков, начальник производства А. В. Шахин, инженер Н. И. Рябинин и
                другие. Медаль «За доблестный труд в Великой Отечественной войне 1941–1945 гг.» была вручена 1294
                сотрудникам завода.
              </p>
            </div>
          }
        />

        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/frunze/9/2.jpg" layout="fill" />
            <figcaption>
              Добров Николай Владимирович Директор завода им. М. В. Фрунзе в 1942–1949 годах. Был директором завода им.
              В. И. Ленина с мая 1937 года по апрель 1941-го. После перевода в Министерство радиотехнической
              промышленности Михаила Салманова (директор завода им. М. В. Фрунзе в 1939–1942 гг.) в апреле 1942 года
              Николай Добров был назначен директором завода имени М. В. Фрунзе
            </figcaption>
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Contribution
