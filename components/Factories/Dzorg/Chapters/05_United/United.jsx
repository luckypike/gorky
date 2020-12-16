import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImage, Columns } from '../../../../'

import styles from './United.module.css'

const United = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Не химией единой">
          <p>
            Мощности завода «Рулон» с момента его основания предполагали также
            производство органического стекла на основе синильной кислоты. Это
            производство не имело первостепенного значения поначалу, но с 1940
            года по приказу Главного управления Наркомата химической
            промышленности оно стало для завода основным.
            Осенью 1940 года на заводе запустили установки по производству
            метилметакрилата и переработке его в блочное оргстекло. За год завод
            выпустил 300 т продукта, и, чтобы увеличить производственные
            мощности, началось строительство второго цеха. Оргстеклом завода
            «Рулон» оборудовались кабины самолетов, принятых на вооружение в
            1940 году — бомбардировщиков, штурмовиков, истребителей. Из
            дзержинского оргстекла производили козырьки, прикрывавшие голову
            летчика в истребителях.
          </p>
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/dzorg/5/1.jpg" layout="fill" />

            <figcaption>
              Руководство завода «Рулон»
            </figcaption>
          </figure>
        </CommonImage>

        <Columns
          left={(
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/dzorg/5/2.jpg" layout="fill" />
            </figure>
          )}

          right={(
            <div>
              <p>
                В 1941 году «Рулон» остался единственным в стране производителем
                оргстекла, поскольку ленинградский завод эвакуировали за Урал и
                возобновил работу он только к лету 1942 года. Заводу № 148 во второй
                половине 1941 года пришлось срочно завершить строительство второго
                цеха по производству оргстекла, который планировали запустить в 1942
                году. Благодаря этому мощности предприятия выросли вдвое до 1240 т в
                год, говорится в отчете Горьковского комитета обороны.
              </p>

              {/* <p className={styles.vrezka}>
                В 1941 году завод «Рулон» остался единственным в стране
                производителем оргстекла
              </p> */}

              <p>
                Сырья заводу № 148 не хватало, и, чтобы обеспечить его ацетоном,
                который до этого поставлялся из Грозного, на соседнем дзержинском
                заводе № 96 организовали производство изопропилового спирта из
                пропилена. «Рулон» перерабатывал этот спирт в ацетон. Как говорится
                в отчете Горьковского комитета обороны в 1941 году, «технология
                получения ацетона из изопропилового спирта — единственная в
                Советском Союзе, где вместо зерна основным сырьем являются отходящие
                газы пиролиза керосина».
              </p>
            </div>
          )}
        />
      </div>
    </div>
  )
}

export default United
