import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainImage, MainText, CommonImage } from '../../../../'

import styles from './LikeClockwork.module.css'

const LikeClockwork = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainImage>
          <figure className={classNames(styles.img, styles.intro)}>
            <Image src="/images/nmjk/img.jpg" layout="fill" />
          </figure>
        </MainImage>
      </div>

      <div className={styles.page}>
        <MainText title="Как по маслу">
          <p>
            Горьковский жиркомбинат ведет свою историю от Химического завода Высоцкого и Гоца, основанного в 1893 году
            рядом с селом Гордеевка Балахнинского уезда Нижегородской губернии для производства гарного масла —
            продукта, который использовался в светильниках, лампадах и уличных фонарях. В 1898 году этот завод у
            предпринимателей купил московский купец первой гильдии Зелик Персиц. В 1902 году он запустил на заводе
            маслобойных цех, который производил сырье (растительные масла) для гарного масла. Завод стал называться
            Маслобойным и химическим заводом З. М. Персица. В 1905-м на нем началось производство мыла, в 1908 году
            коммерсант построил цех для перегонки нефти, и предприятие стало называться Нефтеперегонным,
            нефтеперерабатывающим и маслогарным заводом З. М. Персица. С 1910 года завод начал производить салолин —
            твердый жир из растительных масел и жиров рыб и морских животных. В 1918 году предприятие национализировали,
            в 1921 году с двумя другими заводами объединили в трест. В 1934 году Горьковскому жиркомбинату было
            присвоено имя С. М. Кирова.
          </p>
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/nmjk/7/1.jpg" layout="fill" />
            <figcaption>Главный корпус маргаринового завода перед вводом в эксплуатацию</figcaption>
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default LikeClockwork
