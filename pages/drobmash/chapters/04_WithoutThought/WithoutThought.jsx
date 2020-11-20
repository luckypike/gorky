import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import { MainText, CommonText, CommonImage } from '../../../../components'

import styles from './WithoutThought.module.css'

const WithoutThought = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Сутки без раздумий">
          <p>
            С началом войны выпуск гражданской продукции на заводе ДРО
            остановился. Завод перешел в ведение Наркомата танковой
            промышленности, и предприятие получило адрес «Почтовый ящик №177».
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles.main)}>
              <Image src="/images/drobmash/4/2.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </MainText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            В связи с полным переходом завода на работу для нужд оборонной
            промышленности был введен непрерывный сменный график по 12 часов с
            перерывом на час, выходные отменили. Две смены менялись раз в месяц
            по приказу директора. Цехи перепланировали, чтобы наладить поточный
            выпуск военной техники. В механосборочном цехе №1 установили 25
            новых металлорежущих станков, из термического участка создали новый
            цех, площадь огнерезного участка увеличилась вдвое, выросли мощности
            кузнечно­прессового цеха.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/drobmash/4/1.jpg" layout="fill" />
            </figure>
          </CommonImage>

          <p className={styles.vrezka}>
            С началом войны на заводе был введен непрерывный сменный график
            работы по 12 часов с перерывом на час
          </p>
        </CommonText>
      </div>
      {/* <Gallery image={main}/> */}
    </div>
  )
}

export default WithoutThought
