import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImage } from '../../../../'

import styles from './ArmoredCar.module.css'
import Columns from '../../../../Columns/Columns'

const ArmoredCar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Наш бронеавтомобиль">
          <p>
            Выксунский завод ДРО ос­воил серийное производство корпусов для
            бронеавтомобилей.
            Произошло это так. Основным производителем броневиков в стране был
            Ижорский завод в Санкт-Петербурге. Его конструкторское бюро
            разрабатывало эту технику, и предполагалось, что там же будет
            налажен выпуск бронеавтомобиля «Ижорский» (БАИ). Однако из-за
            высокой загруженности предприятия руководство страны решило, что
            производство будет поставлено на поток на выксунском заводе. По
            решению Правительства СССР от 3 августа 1932 года завод должен был
            освоить выпуск бронемашин. К концу 1933 года предприятие выпустило
            90 машин, в 1934-м — 19, после чего их сняли с производства. Также в
            Выксу было передано с Ижорского завода производство броневика ФАИ
            («Форд-А Ижорский»), в котором в качестве базы было использовано
            шасси Ford. Выксунский завод ДРО выпустил 697 таких машин.
          </p>
        </MainText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/drobmash/6/2.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <Columns
          left={(
            <div>
              В 1936-м на смену ФАИ пришла модель БА-20 на более мощном и надежном
              легковом шасси ГАЗ-М1. В марте-апреле 1937 года инженеры Выксунского
              завода ДРО Мирошин и Сухов спроектировали для БА-20 новую коническую
              башню повышенной пулестойкости. В 1937 году автобронетанковое
              управление Красной Армии выдало заводу заказ на изготовление в
              текущем году трех опытных бронеавтомобилей моделей 21 (на шасси
              ГАЗ-21), 22 (на шасси ГАЗ-АААА) и 23 (на шасси ГАЗ-22). В феврале
              1938 года армией был принят на вооружение вариант БА-21.
            </div>
          )}

          right={(
            <figure className={classNames(styles.img, styles.main)}>
              <Image src="/images/drobmash/6/1.jpg" layout="fill" />
            </figure>
          )}
        />

        {/* <CommonImage>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/drobmash/6/3.jpg" layout="fill" />
          </figure>
        </CommonImage> */}
      </div>
    </div>
  )
}

export default ArmoredCar
