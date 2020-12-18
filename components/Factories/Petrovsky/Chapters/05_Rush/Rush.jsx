import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Columns } from '../../../../'

import styles from './Rush.module.css'

const Rush = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Единым порывом">
          <p>
            В 1943 году завод им. Г. И. Петровского перебазировался на
            территорию «Красного металлиста», сохранив за собой филиал на улице
            Черниговской. Из темных подвальных помещений рабочие переместились в
            светлые и просторные цехи. Наконец-то удалось снизить остроту очень
            болезненной для предприятия проблемы — нехватки производственных
            площадей.
          </p>
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/petrovsky/6/3.jpg" layout="fill" />
            <figcaption>
              Работники завода им. Г. И. Петровского в годы войны
            </figcaption>
          </figure>
        </CommonImage>

        <Columns
          left={
            <div>
              <p>
                На территории «Красного металлиста» было организовано семь новых
                цехов, освоены производства электроузлов, резиновых деталей,
                тонкостенных фасонных труб, пластмассы и прочих компонентов.
                Завод сразу приступил к изготовлению целого ряда новых изделий,
                в том числе прибора для беспузырной торпедной стрельбы с
                подводных лодок. За 10 месяцев 1943 года выпустили 192 таких
                прибора.
              </p>
              <p>
                Наряду с плановыми работами выполнялось специальное задание по
                изготовлению таких приборов, как спидограф, гидрофон и
                стабилизатор глубины для торпед.
              </p>
              <p>
                Также на заводе в этот период был спроектирован и изготовлен
                турбогенеротор — турбина малых размеров с числом оборотов 30
                тыс./мин. Она предназначалась для оснащения торпед. По сравнению
                с ранее выпускавшимися образцами КПД турбины удалось повысить в
                три раза.
              </p>
            </div>
          }
          right={
            <div>
              <figure className={classNames(styles.img, styles._2)}>
                <Image src="/images/petrovsky/6/2.jpg" layout="fill" />
                <figcaption>
                  Из объяснительной записки к годовому отчету завода за 1944 год
                </figcaption>
              </figure>
            </div>
          }
        />

        <CommonImage content>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/petrovsky/6/1.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonText>
          <p className={styles.vrezka}>
            В 1943 году завод им. Г. И. Петровского перебазировался на
            территорию «Красного металлиста», где было организовано семь цехов и
            освоены новые производства электроузлов, резиновых деталей,
            тонкостенных фасонных труб, пластмассы
          </p>
        </CommonText>
      </div>
    </div>
  )
}

export default Rush
