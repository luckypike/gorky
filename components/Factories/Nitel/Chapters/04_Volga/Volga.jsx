import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {
  MainText,
  CommonText,
  Columns
} from '../../../../'

import styles from './Volga.module.css'

const Volga = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="РАФ «Волга»: с Фрунзе — на НИТЕЛ">
          <p>
            Серийный выпуск автомобильной фронтовой радиостанции (РАФ),
            разработанной заводом имени М. В. Фрунзе, начался на заводе имени В.
            И. Ленина в 1938 году. РАФ заменяла собой радиостанцию 11-АК и
            предназначалась для обеспечения телефонной и телеграфной связи
            штабов высших войсковых соединений, а также аэродромов с самолетами
            в диапазонах средних и коротких волн. Если РСБ весила 45 кг, то РАФ
            — уже 280 кг. Всего за период войны было изготовлено 1497
            радиостанций РАФ в 65 вариантах.
          </p>
        </MainText>

        <Columns
          left={
            <div>
              <p>
                На март 1941 года в состав завода, в частности, входили цехи по
                сборке самолетных радиостанций, сборке и монтажу узлов
                радиостанций. После начала войны был организован цех по выпуску
                сопротивлений и конденсаторов, участок по переделке стрелочных
                измерительных приборов. К октябрю того же года сюда с завода №
                203 было передано производство приемников УС со всем
                оборудованием, документацией и аппаратурой.
              </p>

              <figure className={classNames(styles.img, styles._1)}>
                <Image src="/images/nitel/5/2.jpg" layout="fill" />
              </figure>
            </div>
          }
          right={
            <div>
              <figure className={classNames(styles.img, styles.main)}>
                <Image src="/images/nitel/5/1.jpg" layout="fill" />
              </figure>
            </div>
          }
        />

        <CommonText>
          <p className={styles.vrezka}>
            В 1941 году номенклатура завода им. В. И. Ленина расширилась: ему
            были переданы изделия с других предприятий
          </p>
        </CommonText>
      </div>
    </div>
  )
}

export default Volga
