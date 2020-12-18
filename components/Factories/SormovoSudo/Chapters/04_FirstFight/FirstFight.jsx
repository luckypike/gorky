import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, CommonImages } from '../../../../'

import styles from './FirstFight.module.css'

const FirstFight = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Первый бой «Комсомольца»">
          <p>
            В первый боевой поход «Комсомолец» вышел из Ленинграда в июне 1942 года. Уже при переходе в Кронштадт лодка
            подверглась артобстрелу противника. На подлодке отказали компасы и освещение. Однако уже 15 июня экипаж
            «Щуки» двумя торпедами потопил вражеское судно, которое перевозило артиллерию и танки.
          </p>
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/sormovo_sudo/4/2.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonText>
          <p className={styles.vrezka}>
            В 2004 году подорвавшуюся на минах и затонувшую подлодку «Комсомолец» обнаружили финские корабли
          </p>
          <p>
            Поход «Комсомольца» длился 18 суток. За это время субмарину атаковали с воздуха семь раз. Еще дважды ее
            пытались потопить подлодки противника. Она 22 раза пересекала линии минных заграждений и выдержала 41 серию
            атак глубинными бомбами. За успешный поход членов экипажа наградили орденами Красного Знамени и Красной
            Звезды, медалями «За отвагу» и «За боевые заслуги». Однако второй поход подводной лодки «Комсомолец» стал
            последним. В декабре 1942 года подлодка подорвалась на минном заграждении «Насхорн» и затонула. Лишь в 2004
            году она была обнаружена финскими кораблями.
          </p>
        </CommonText>

        <CommonImages>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/sormovo_sudo/4/1.jpg" layout="fill" />
          </figure>

          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/sormovo_sudo/4/3.jpg" layout="fill" />
          </figure>
        </CommonImages>
      </div>
    </div>
  )
}

export default FirstFight
