import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, Columns, CommonImage } from '../../../../'

import styles from './BM8.module.css'

const BM8 = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="БМ-8: реактивное освоение" />

        <Columns
          right={
            <div>
              <p>
                ГЗФС был включен в состав заводов-смежников Горьковского автозавода
                по производству легкого танка Т-60. Ему поручалось изготовление узла
                главной передачи, в том числе и производство бортовых фрикционов. За
                это время завод произвел 1400 узлов главной передачи для танка Т-60,
                полностью обеспечив автозавод этими узлами.
                Затем Горьковский обком ВКП(б) поручил заводу освоить выпуск
                реактивных установок БМ-8 на танках Т-60. Чтобы серийное
                производство было налажено в короткие сроки, из Москвы был
                командирован военный инженер Г. А. Копылов. Быстро выяснилось,
                что по московским чертежам монтировать установку на танк Т-60
                без существенной переделки невозможно. Конструкция БМ-8 была
                рассчитана на танк-амфибию Т-40. На протяжении трех суток
                конструкторский коллектив завода совершенствовал установку. В
                течение месяца ГЗФС выпустил первые десять машин, до конца 1941
                года — 117 установок. За первое полугодие 1942 года станкозавод
                отправил на фронт 301 реактивную установку БМ-8, снабдив ими 36
                дивизионов. Если в 1941 году все установки изготавливались с 12
                направляющими, то в 1942 году было произведено несколько
                установок с 16 и 24 направляющими.
              </p>
            </div>
          }
          left={
            <div>
              <figure className={classNames(styles.img, styles.main)}>
                <Image src="/images/zfs/8/1.jpg" layout="fill" />
              </figure>
            </div>
          }
        />

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/zfs/9/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
        
      </div>
    </div>
  )
}

export default BM8
