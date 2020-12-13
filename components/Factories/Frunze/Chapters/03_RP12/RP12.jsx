import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, Columns, CommonText, CommonImage } from '../../../../'

import styles from './RP12.module.css'

const RP12 = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="12-РП: радиостанция победы" />

        <Columns
          left={
            <div>
              <p>
                Уже через час после объявления по радио о начале войны состоялся
                массовый митинг работников завода им. М. В. Фрунзе. Выступавшие
                на митинге гневно клеймили немецко-фашистских захватчиков,
                клялись отдать все силы и не пожалеть самой жизни для разгрома
                врага. На митинге было принято удивительное по своему содержанию
                решение «Будем работать спокойно, без паники, честно трудиться,
                каждый на своем рабочем месте, но с удвоенной энергией, давая
                продукцию высокого качества и в установленные сроки», о чем
                пишет П. Калякина в материалах Всероссийской научно-практической
                конференции Нижегородского государственного
                архитектурно-строительного университета. По распоряжению
                Наркомата авиационной промышленности завод должен был как можно
                скорее развернуть массовое производство переносных
                малогабаритных радиостанций для «низовой», самой
                распространенной связи в войсках.
              </p>
            </div>
          }
          right={
            <div>
              <figure className={classNames(styles.img, styles.main)}>
                <Image src="/images/frunze/4/4.jpg" layout="fill" />
              </figure>
            </div>
          }
        />

        <CommonImage content>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/frunze/4/2.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <Columns
          left={
            <div>
              <figure className={classNames(styles.img, styles._2)}>
                <Image src="/images/frunze/4/1.jpg" layout="fill" />
              </figure>
            </div>
          }
          right={
            <div>
              <p>
                Доработка передатчика типа ДОТ «Дрофа» и антенной системы
                привела к созданию самой популярной радиостанции в Красной Армии
                типа 12-РП. Позже радиостанция 12-РП была усовершенствована. С
                новой антенной типа ДД и усилительной лампой типа 2П9М она
                обеспечивала коммуникацию на расстоянии около 30 км, что
                гарантировало надежную связь с партизанскими отрядами. Готовая
                продукция тут же отправлялась на фронт. Требования заказчика к
                качеству радиостанций были очень высокими. Модернизация
                радиостанции 12-РП продолжалась в течение всей войны. С 1941-го
                по 1945 гг. завод им. М. В. Фрунзе изготовил около 30 тыс. таких
                радиостанций.
              </p>
              <figure className={classNames(styles.img, styles._3)}>
                <Image src="/images/frunze/4/3.jpg" layout="fill" />
              </figure>
            </div>
          }
        />

        <CommonText>
          <p className={styles.vrezka}>
            Требования заказчика к качеству радиостанций были очень высокими.
            Модернизация 12-РП продолжалась всю войну
          </p>
        </CommonText>
      </div>
    </div>
  )
}

export default RP12
