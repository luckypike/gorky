import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainImage, MainText, CommonText, Columns, CommonImage, Speech } from '../../../../'

import styles from './Before.module.css'

const Before = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainImage>
          <figure className={classNames(styles.img, styles.intro)}>
            <Image src="/images/shipyard/img.jpg" layout="fill" />
            <figcaption>Новая судоверфь на берегу Оки была построена в 1907 году</figcaption>
          </figure>
        </MainImage>
      </div>

      <div className={styles.page}>
        <MainText title="Накануне войны">
          <p>
            Судоверфь на берегу Оки в Навашинском районе (в 1929–1944 гг. — Муромский, в 1944–1960 гг. —
            Мордовщиковский) Нижегородской области была построена в 1907 году. Это было предприятие Коломенского
            машиностроительного завода, который располагал мощным судостроительным производством и расширялся, получив
            крупные заказы на постройку нефтеналивных барж. Новую верфь построили в поселке Мордовщики, недалеко от
            принадлежавшего тогда машзаводу Кулебакского металлургического завода.
          </p>
        </MainText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/shipyard/3/1.jpg" layout="fill" />
            <figcaption>С 1911 года завод изготавливал фермы мостов для железных дорог</figcaption>
          </figure>
        </CommonImage>

        <Columns
          right={
            <div>
              <p>
                К 1912 году судоверфь была уже
                основным поставщиком речных барж для Волжского бассейна. До революции на верфи построено более 60 судов, в
                том числе более 30 барж, 20 землеотвозных шаланд, грузо-пассажирские теплоходы, буксир и шхуна.
                Мордовщиковская судоверфь стала пионером крупнотоннажного сварного судостроения в СССР. В июне 1935 года
                была построена цельносварная баржа «Комсомолка Судоплатова» грузоподъемностью 6000 т. Так судоверфь
                доказала, что может перейти на постройку целиком сварных судов без ограничения их размеров и назначения.
                В 1928–1940 гг. построено 14 самоходных и 125 несамоходных судов.
              </p>
              <p>
                Параллельно на верфи развивалось мостостроение. С 1911 года предприятие изготавливало фермы мостов для
                железных дорог. Работы над понтонными парками начались в 1933 году. Тяжелый понтонный парк Н2П первую
                боевую проверку прошел в 1939 году в боях с японскими захватчиками на реке Халхин-Гол, получив хорошие
                отзывы военных.
              </p>

              <p className={styles.vrezka}>
                В начале XX века Окская судоверфь была основным поставщиком речных барж для Волжского бассейна
              </p>
            </div>
          }
          left={
            <div>
              <figure className={classNames(styles.img, styles.main)}>
                <Image src="/images/shipyard/3/2.jpg" layout="fill" />
              </figure>
            </div>
          }
        />

        <CommonText>

        </CommonText>

        <Speech
          title="«Впервые я видел, как рабочие работали без чертежей»"
          author={{ name: 'Главный инженер Мордовщиковского завода в годы войны И. С. Прибыльский' }}
        >
          «В августе 1941 года Николаевский судостроительный завод им. 61 Коммунара, на котором я работал главным
          инженером, эвакуировался. Представители наркомата распределяли нас по предприятиям. Меня назначили главным
          инженером Мордовщиковского завода. В сентябре с группой рабочих, служащих и инженерно-технических работников
          мы прибыли на завод. Для меня и всех прибывших он был приятным открытием. Организация и технология
          производства находились на высоком уровне. Мы встретились с высоким техническим уровнем рабочих и ИТР. Впервые
          я видел, как рабочие трудились без чертежей. Это объяснялось стабильностью программы, многосерийностью
          номенклатуры и отработанностью технологии, а самое главное — стабильностью кадров рабочих. Невольно захотелось
          сравнить хорошие стороны в работе заводов. Мордовщиковцы значительно опередили николаевцев в применении
          электросварки. Если завод им. 61 Коммунара в строительстве кораблей применял много сверловки, клепки, чеканки
          и незначительно электросварки, то Мордовщиковский завод полностью в то время перешел на электросварку».
        </Speech>
      </div>
    </div>
  )
}

export default Before
