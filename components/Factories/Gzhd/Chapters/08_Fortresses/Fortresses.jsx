import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {
  MainText,
  CommonText,
  Speech,
  WarTechnique,
  CommonImage
} from '../../../../'

import styles from './Fortresses.module.css'

const Fortresses = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Крепость на колесах">
          <p>
            Один из самых известных бронепоездов Великой Отечественной войны
            «Козьма Минин» был построен в 1941 году в локомотивном депо станции
            Горький-Московский под руководством заместителя начальника
            паровозной службы дороги Леонида Рыбенкова.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles.main)}>
              <Image src="/images/gzhd/8/1.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </MainText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            По тем же чертежам строился «Илья Муромец», который 9 февраля 1942
            года прибыл в Горький из Мурома. Приземистые, обтекаемой формы,
            защищенные мощной броней, они были настоящими крепостями на колесах.
            У дивизиона был свой автопарк, куда входили два броневых автомобиля
            БА-20, три мотоцикла М-72 и Иж-9, шесть грузовых автомашин ГАЗ-АА,
            две машины М-1, две машины ГАЗ-64. Личный состав дивизиона вместе с
            приданной десантно-минометной ротой составлял 335 человек.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/gzhd/8/4.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <Speech
            title="«У них нет противника»"
            author={{
              name:
                'Начальник Главного автобронетанкового управления Красной Армии в годы войны Я. Федоренко'
            }}
          >
            «Такие бронепоезда в нашей стране еще не строились. Нет их и у
            противника. Ничего общего, кроме железнодорожного хода, не имеют они
            с существующей бронепоездной техникой»
          </Speech>

          <CommonImage>
            <figure className={classNames(styles.img, styles._2)}>
              <Image src="/images/gzhd/8/5.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <WarTechnique title="Бронепаровозы «Козьма Минин» и «Илья Муромец»">
            <li>
              Бронепаровозы «Козьма Минин» и «Илья Муромец». Использовались для
              передвижения состава непосредственно в бою
            </li>
            <li>
              Тендер — специальный вагон, прицепляемый к паровозу для перевозки
              топлива (дров, угля, нефти) и воды. Бронепаровоз ставился тендером
              к противнику.
            </li>
            <li>
              Крытые бронеплощадки. Толщина боковой брони — 45 мм, верхняя броня
              — 20 мм. На борту каждой были установлены две 76,2-мм пушки Ф-34 в
              башнях от танков Т-34, с ними спарены 7,62-мм пулеметы ДТ. У
              «Козьмы Минина» — четыре 7,62-мм пулемета ДТ, у «Ильи Муромца» —
              также четыре ДТ, либо пулеметы Максима.
            </li>
            <li>
              Открытые артиллерийские площадки. Они представляли собой открытую
              коробку, обнесенную с боков стальными листами. На борту каждой —
              две реактивные установки М-8-24 «Катюши». У «Козьмы Минина» — две
              25-мм зенитные пушки образца 1940 года (72-К), у «Ильи Муромца» —
              две 37-мм зенитные пушки образца 1939 года (61-К).
            </li>
            <li>
              Контрольные площадки — пустые платформы, которые «проверяли»
              состояние дороги. Если путь был заминирован, потери благодаря этим
              платформам были минимальными. На платформах обычно лежали рельсы,
              шпалы и другие материалы для ремонта железнодорожных путей.
            </li>
          </WarTechnique>

          <CommonImage>
            <figure className={classNames(styles.img, styles._3)}>
              <Image src="/images/gzhd/8/3.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._4)}>
            <Image src="/images/gzhd/8/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Fortresses
