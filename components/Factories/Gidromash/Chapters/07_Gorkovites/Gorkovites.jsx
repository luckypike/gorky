import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImage, Speech } from '../../../../'

import styles from './Gorkovites.module.css'

const Gorkovites = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Москвичи и горьковчане">
          <p>
            Пока новички учились, вытягивать план приходилось участникам
            соцсоревнования и стахановцам, «двухсотникам», фронтовым бригадам.
            По сравнению с началом работы в Горьком их количество в 1942 году
            удвоилось: стахановцев было почти 25%, 42 фронтовые бригады.
            В целом штат завода вырос до 2439 человек, что и требовалось по плану.
            Хотя костяк трудового коллектива составляли москвичи, численность
            горьковчан уже почти сравнялась с ними.
          </p>

          <p>
            В своем годовом отчете директор перечислял многие примеры трудовой
            доблести. Слесарь-инструментальщик Алексеев изготовил сложный
            кондуктор не за положенные пять-шесть смен, а за полтора дня. Токарь
            Улицкий, получив срочное задание, не выходил из цеха двое суток, но
            выполнил задание досрочно. При напряженной ситуации с планом к
            станкам нередко вставали мастера, начальники смен,
            инженерно-технические работники и тоже работали по двое суток, не
            уходя с завода.
          </p>

          <p>
            Условия были тяжелыми: многие станочники работали рядом с кузнечными
            молотами, сварочными аппаратами. Порой в цехах царил такой холод,
            что замерзала охлаждающая эмульсия в металлообрабатывающих станках.
            А электроэнергия к ним долгое время подавалась открытой воздушной
            проводкой.
          </p>
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/gidromash/7/1.jpg" layout="fill" />

            <figcaption>
              Многие стахановские рекорды — дело женских рук
            </figcaption>
          </figure>
        </CommonImage>

        <Speech
          title="«Люди творили чудеса героизма»"
          author={{
            name: 'Заместитель начальника цеха в годы войны К. А. Макаров:'
          }}
        >
          «О себе не думали. Никого не приходилось уговаривать оставаться
          после 12 часов работы еще на смену, другую. Голодные, озябшие,
          постоянно недосыпающие (прикорнут у станка ненадолго — и ладно),
          люди творили чудеса героизма, особенно молодежь».
        </Speech>
      </div>
    </div>
  )
}

export default Gorkovites
