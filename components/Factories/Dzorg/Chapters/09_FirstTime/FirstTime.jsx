import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../'

import styles from './FirstTime.module.css'

const FirstTime = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Впервые в стране">
          <p>
            После войны производство завода «Рулон» шло по двум основным
            направлениям: на базе ацетона и синильной кислоты создали группу
            цехов, которая занималась выпуском мономеров метакрилового ряда; на
            основе метано-водородной фракции и природного газа наладили
            производство синильной кислоты, из которой с использованием окиси
            этилена делали мономеры акрилового ряда.
          </p>
        </MainText>
      </div>

      <div className={styles.page}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/dzorg/9/2.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            В 1960–1970 годах на предприятии освоили выпуск метакрилатных
            депрессорных и загущающих присадок к маслам, эмульсий для кожевенной
            и лакокрасочной промышленностей. По производству акрилатов и
            метакрилатов завод был ведущим в СССР. Почти все продукты,
            выпускавшиеся заводом, производились в стране впервые.
          </p>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Основной специализацией завода, который 1 октября 1966 года стал
            химкомбинатом «Оргстекло», оставалось производство органического
            стекла для авиации. С появлением высокоскоростных самолетов на
            заводе начали выпускать теплостойкие и высокопрочные марки
            оргстекла. Оргстекло завода устанавливали на высокоскоростные МиГи.
            Продукция завода также ставилась на электропоезда, малые подводные
            лодки, шлемы летных и космических скафандров. В 2015 году не
            пережившее экономических потрясений предприятие было признано
            банкротом.
          </p>

          <p className={styles.vrezka}>
            Основной специализацией завода оставалось производство органического
            стекла для авиации
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/dzorg/9/1.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>
    </div>
  )
}

export default FirstTime
