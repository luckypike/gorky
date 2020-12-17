import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImages } from '../../../../'

import styles from './PeacefulSky.module.css'

const PeacefulSky = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Под мирным небом">
          <p>
            После 1945 года производство военной продукции на заводе свернули. В
            1946 году металлурги КМЗ первыми в СССР начали выпуск цельнолитых
            якорных цепей для морского флота.
            В начале 1950-х годов завод начал изготавливать чугунные и стальные
            детали для сельхозтехники. Мартен после войны подвергся масштабной
            реконструкции: его оснастили новым оборудованием, освоив скоростные
            и тяжеловесные плавки. В 1944 году КМЗ выпустил 115,6 тыс. т стали и
            122 тыс. т стального проката, а в 1955-м — 229 тыс. т и до 261,1
            тыс. т соответственно. В те же годы предприятие начало осваивать
            производство колец для реактивных двигателей из новых авиационных
            материалов, которое является основным для завода и сегодня.
          </p>
        </MainText>

        <CommonImages>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/ruspolimet/9/1.jpg" layout="fill" />
          </figure>

          <figure className={classNames(styles.img, styles._3)}>
            <Image src="/images/ruspolimet/9/4.jpg" layout="fill" />
          </figure>
        </CommonImages>
      </div>
    </div>
  )
}

export default PeacefulSky
