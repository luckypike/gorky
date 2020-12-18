import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImages, Columns } from '../../../../'

import styles from './Production.module.css'

const Production = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="В авангарде производства">
          <p>
            За время войны на предприятии были разработаны и внедрены в
            производство радиостанции для боевых кораблей, подводных лодок и
            береговых частей «Бриз-ИП1», «Бриз-ИП2», «Скумбрия», «Дельфин» и
            другие. Хорошо зарекомендовала себя на фронте и выпускаемая заводом
            МГУ-3М — мощная громкоговорящая установка для агитационного вещания
            через линию фронта на войска противника.
          </p>
        </MainText>

        <Columns
          left={
            <div>
              <p>
                Завод им. В. И. Ленина стал крупнейшим поставщиком переговорных
                устройств для самолетов, танков, кораблей и бронепоездов.
                Переговорные устройства для связи в танках (ТПУ-Ф) и самолетах
                (СПУ-Ф) направлялись на оборонные заводы в Казань, Куйбышев,
                Омск, Иркутск, Комсомольск, Ташкент.
              </p>
              <p>
                Всего с 1941-го по 1945 год заводом было поставлено на фронт 178
                тыс. комплектов радиостанций более 50 типов, 112 тыс. комплектов
                переговорных устройств и 234 тыс. полевых телефонных аппаратов.
                Почти все виды советских войск были оснащены средствами связи,
                изготовленными на Горьковском заводе им. Ленина и им. Фрунзе. За
                образцовое выполнение заданий правительства по обеспечению
                Красной Армии специальной аппаратурой 21 января 1944 года завод
                был награжден орденом Ленина.
              </p>

              <p className={styles.vrezka}>
                С 1941-го по 1945 год завод поставил на фронт 178 тыс.
                комплектов радиостанций более 50 типов
              </p>
            </div>
          }
          right={
            <div>
              <figure className={classNames(styles.img, styles.main)}>
                <Image src="/images/nitel/13/3.jpg" layout="fill" />
              </figure>
            </div>
          }
        />

        <CommonImages>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/nitel/13/1.jpg" layout="fill" />
            <figcaption>
              МГУ-39М: мощная громкоговорящая установка для агитации войск
            </figcaption>
          </figure>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/nitel/13/2.jpg" layout="fill" />
            <figcaption>
              ТПУ-Ф: переговорное устройство для связи экипажа в танке
            </figcaption>
          </figure>
        </CommonImages>
      </div>
    </div>
  )
}

export default Production
