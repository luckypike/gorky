import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, Columns, CommonImage } from '../../../../'

import styles from './Professions.module.css'

const Professions = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Профессии, нужные тылу" />

        <Columns
          left={
            <div>
              <p>
                К началу войны коллектив завода насчитывал 6780 человек. На
                фронт ушли около 40% рабочих. Их заменили молодежь и
                женщины-домохозяйки, в короткие сроки прошедшие обучение. Многие
                заводчане стали осваивать новые профессии и проходить курсы по
                повышению квалификации. Областная газета «Горьковская коммуна»
                10 июля 1941 года писала: «На заводе с каждым днем ширится
                движение по совмещению профессий. Многие товарищи решили
                обучаться на курсах и получить вторую специальность, чтобы быть
                готовыми заменить ушедших на фронт. Клубков, контролер
                калибровочного хозяйства, сказал, что может работать токарем
                седьмого разряда. 54 работницы отдела № 5 решили обучаться
                профессиям токаря, слесаря, фрезеровщика. Делопроизводитель
                Маслова, статистик Хлыстов, уборщица Смирнова записались на
                курсы фрезеровщиков, архивариус Конфеткина — на курсы слесарей».
              </p>
            </div>
          }
          right={
            <div>
              <figure className={classNames(styles.img, styles.main)}>
                <Image src="/images/nitel/6/1.jpg" layout="fill" />
              </figure>
            </div>
          }
        />

        <CommonText>
          <p className={styles.vrezka}>
            На фронт ушли около 40% рабочих. Их заменили молодежь и
            женщины-домохозяйки, в короткие сроки прошедшие обучение. Многие
            заводчане решили получить вторую специальность: делопроизводители и
            уборщицы осваивали профессии токаря, слесаря, фрезеровщика
          </p>
        </CommonText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/nitel/6/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Professions
