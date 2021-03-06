import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImage, CommonText, Columns } from '../../../../'

import styles from './Director.module.css'

const Director = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="«Директор пожимал всем руки...»">
          <p>
            В ночь с 8 на 9 мая в Горький пришла радостная весть. Работники
            вспоминают, что директор завода П. А. Беляев ходил по цехам и всем
            пожимал руки, поздравляя с великой победой советской армии над
            немецко-фашистскими войсками. После победы на завод № 197 было
            завезено немецкое оборудование по производству радиоаппаратуры с
            завода фирмы AEG в Берлине и оборудование по производству
            радиоразведывательной аппаратуры с предприятий в Митвайде и
            Мюльхаузене.
          </p>
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/nitel/14/5.jpg" layout="fill" />
            <figcaption>
              Митинг вручения Красного знамени Государственного комитета обороны
              на заводе им. В.И. Ленина. 1946 год
            </figcaption>
          </figure>
        </CommonImage>

        <Columns
          left={
            <div>
              <p>
                В послевоенный период перед заводом были поставлены новые
                задачи. В марте 1946 года нижегородское предприятие вступило в
                эпоху радиолокации. Первым в стране завод им. В. И. Ленина
                получил госзаказ на разработку и изготовление подвижных
                радиолокационных станций (РЛС). В мае того же года за
                самоотверженный труд рабочих, инженерно-технических работников и
                служащих в период Великой Отечественной войны Красное знамя
                Государственного комитета обороны, которое на протяжении всей
                войны переходило предприятию 11 раз, было передано заводу на
                постоянное хранение.
              </p>
            </div>
          }
          right={
            <div>
              <figure className={classNames(styles.img, styles._4)}>
                <Image src="/images/nitel/14/4.jpg" layout="fill" />
                <figcaption>
                  Красное знамя Государственного комитета обороны на заводе им.
                  В.И. Ленина. 1946 год
                </figcaption>
              </figure>
            </div>
          }
        />

        <Columns
          left={
            <div>
              <figure className={classNames(styles.img, styles._1)}>
                <Image src="/images/nitel/14/1.jpg" layout="fill" />
                <figcaption>
                  Регулировщица монтажно-телевизионного цеха завода им. В.И.
                  Ленина
                </figcaption>
              </figure>
            </div>
          }
          right={
            <div>
              <p>
                С начала 50-х годов параллельно с производством спецтехники на
                предприятии начался серийный выпуск радиоприемников и
                радиопроигрывателей. С начала 60-х — телевизоров «Радий»,
                «Чайка» и «Нител». Последний телевизор сошел с конвейера в 2003
                году.
              </p>
              <p>
                Сейчас завод полностью сосредоточился на своем ключевом
                направлении — производстве РЛС. Являясь одним из ведущих
                производителей радиолокационной техники в России, НИТЕЛ решает
                задачи по обеспечению безопасности воздушных границ страны и
                продолжает работы над модернизацией выпускаемой техники.
              </p>
            </div>
          }
        />

        <CommonText>
          <p className={styles.vrezka}>
            Красное знамя Государственного комитета обороны, которое на
            протяжении всей войны переходило предприятию 11 раз, было передано
            заводу на постоянное хранение
          </p>
        </CommonText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/nitel/14/2.jpg" layout="fill" />
            <figcaption>
              Орден Ленина, который получил НИТЕЛ за образцовое выполнение
              заданий правительства
            </figcaption>
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Director
