import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../'

import styles from './GlassGiant.module.css'

const GlassGiant = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Новый стеклогигант">
          <p>
            Стекольный завод на Моховых Горах в Борском районе Горьковской
            области был пущен в эксплуатацию в 1934 году. В этих местах были
            разведаны большие запасы песка, необходимые для крупного стекольного
            производства.
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/adcbsz/3/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            На тот момент в СССР был только один механизированный стекольный
            завод — в Дагестане, выпускавший оконные стекла. По проектной
            мощности борское предприятие стало крупнейшим в стране:
            производительность его машин Фурко (машины вертикального вытягивания
            расплавленной массы стекла, изобретенные бельгийским инженером
            Эмилем Фурко) оценивалась в 10,8 млн кв. м крупноразмерного стекла в
            год. Уже тогда борский стеклозавод называли стеклогигантом.
          </p>

          <p>
            В 1940 году на предприятии был организован цех по выпуску
            трехслойного стекла — триплекса, фотостекла, фацетного стекла. На
            заводе появились специальные прессы, в которые в резиновых мешках
            погружалось стекло с целлулоидной прослойкой. Для изучения новой
            технологии борских фацетчиц отправляли на полгода на предприятие
            «Мосавтостекло».
          </p>
        </CommonText>
      </div>
    </div>
  )
}

export default GlassGiant
