import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {
  MainText,
  CommonImages
} from '../../../../'

import styles from './FriendlyGuys.module.css'

const FriendlyGuys = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="«Дружные ребята»">
          <p>
            В 1942 году в Горький привезли детей из блокадного Ленинграда. Мест
            в детских домах не было, и директор авиазавода С. И. Агаджанов взял
            их под свою опеку.
            Ребят сначала разобрали по семьям, а потом быстро построили
            общежитие и нашли воспитателей. Чтобы решить вопрос с питанием
            детей, их трудоустроили на завод — как сотрудники они могли получить
            продуктовые карточки. Шефство над 80 новыми юными работниками взяла
            бригада О. А. Завражновой. Под ее началом дети начали комплектовать
            электрожгуты и собирали электропанели: был разработан специальный
            технологический процесс и налажен детский конвейер. Через год эта
            бригада, которую назвали «Дружные ребята», вышла на второе место в
            соревновании среди всех комсомольско-молодежных бригад Горького.
          </p>

          <p className={styles.vrezka}>
            В 1942 году на авиазаводе был разработан специальный технологический процесс и налажен детский конвейер
          </p>
        </MainText>

        <CommonImages>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/sokol/14/2.jpg" layout="fill" />

            <figcaption>Дети из блокадного Ленинграда работают на конвейере в основном цехе сборки</figcaption>
          </figure>

          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/sokol/14/1.jpg" layout="fill" />

            <figcaption>«Дружные ребята» быстро стали одной из лучших молодежных бригад города</figcaption>
          </figure>
        </CommonImages>
      </div>
    </div>
  )
}

export default FriendlyGuys
