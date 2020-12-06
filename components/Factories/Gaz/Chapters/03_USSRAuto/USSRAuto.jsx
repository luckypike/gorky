import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../'

import styles from './USSRAuto.module.css'

const USSRAuto = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Гигант советского автопрома ">
          <p>
            История автомобильного завода берет начало в 1929 году, когда Ford
            Motor Company и СССР подписали соглашение о взаимодействии в
            организации массового производства машин. В годы депрессии в США
            контракт с СССР был выгодным предложением для американской компании. В 1929 году началась работа над первыми проектами — легковыми
            машинами ГАЗ-А и грузовиками ГАЗ-АА, прототипами которых были Ford-A
            и Ford-AA.
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/gaz/3/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Согласно договору с Ford Motor Company, ГАЗ обязался
            закупить у американской компании 72 тыс. комплектов деталей для
            сборки машин. На Горьковском автозаводе планировали самостоятельно
            изготовлять примерно до 60% наименований узлов и деталей для сборки
            машин, а остальные компоненты закупать на стороне. Проектированием
            цехов и корпусов занималась американская компания Austin. Завод,
            который сначала назывался нижегородским, а затем получил имя одного
            из руководителей советского государства Вячеслава Молотова, пустили
            в строй 1 января 1932 года. В 1935 году по обоюдному согласию
            договор с Ford Motor Company был расторгнут. В тот же год с
            конвейера завода сошел стотысячный автомобиль ГАЗ-А.
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/gaz/3/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/gaz/3/3.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            Согласно мобилизационному плану СССР, после начала Второй мировой
            войны в 1939 году ГАЗ должен был освоить производство продукции
            военного назначения: корпусов для мин, бронебойных снарядов,
            взрывателей к авиационным бомбам и другой продукции. Также
            предприятие выпускало гусеничные машины — танкетки (Т-27), плавающие
            танки (Т-37), артиллерийский тягач (Т-20 «Комсомолец»). На
            предприятии проектировали даже самолеты («Комсомолец 1», «Комсомолец
            2»). Они работали на автомобильных двигателях и использовались в
            основном участниками аэроклубов. В начале 40-х годов автозавод
            выпускал небольшими партиями речные катера и аэросани.
          </p>
        </CommonText>
      </div>
    </div>
  )
}

export default USSRAuto
