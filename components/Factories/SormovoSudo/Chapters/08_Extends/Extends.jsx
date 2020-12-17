import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../'

import styles from './Extends.module.css'

const Extends = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="«Красное Сормово» укрупняется">
          <p>
            В послевоенные годы «Красное Сормово» вернулось к гражданскому судостроению. Продолжились работы по
            достройке подлодок, заложенных на предприятии еще в годы войны. Завод приступил к реализации новых проектов
            и развернул крупносерийное строительство подводных лодок проекта 613.
            Их начали разрабатывать в центральном конструкторском бюро № 18 еще в годы войны на замену «Щукам». Чертежи
            были готовы к 1948 году, тогда же первую такую субмарину заложили на «Красном Сормове». В 1950 году ее уже
            спустили на воду. Серия этих подлодок стала самой большой в мире и насчитывала 215 единиц. Больше половины,
            113, построили на «Красном Сормове».
          </p>
        </MainText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/sormovo_sudo/8/2.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            Строительство подводных лодок на предприятии прекратилось в 2005 году. Всего сормовичи выпустили 275 боевых
            подводных лодок, в том числе 26 атомных. В наши дни «Красное Сормово» продолжает развиваться как крупнейшее
            в России судостроительное предприятие.
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/sormovo_sudo/8/1.jpg" layout="fill" />
          </figure>
        </CommonImage>

      </div>
    </div>
  )
}

export default Extends
