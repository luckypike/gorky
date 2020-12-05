import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../'

import styles from './Rotation.module.css'

const Rotation = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Вращение на полную">
          <p>
            Первые павловские изделия для истребителей ЛаГГ-3 Горьковский
            авиазавод №21 им. С. Орджоникидзе получил в конце 1941 года. Это
            были трехлопастные винты ВИШ-105 конструкторов С. Ш. Бас-Дубова и
            Г.М. Заславского.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles.main)}>
              <Image src="/images/gidroagregat/4/2.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </MainText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Бас-Дубов и Заславский — известные разработчки винтов для боевых
            самолетов. Они работали на московском заводе № 28, который долгое
            время был в СССР крупнейшим производителем металлических винтов для
            авиации. Предполагалось, что завод № 28 будет эвакуирован в Павлово:
            в июле 1941 года вышел приказ Наркомата авиапрома об этом, но в
            конце года предприятие перевели в Свердловск, на площадку планерного
            завода № 493. На павловский завод № 467 летом 1941-го приехали
            только два московских КБ — Бас-Дубов и Заславский со своим ОКБ-2, а
            также ОКБ-3 Н.Г. Никифорова. Никифоров был назначен главным
            конструктором завода № 467.
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/gidroagregat/4/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Московские специалисты проработали в городе Павлово около года:
            курировали работы по доводке автоматических винтов с регулятором
            постоянных оборотов, налаживали производство. В начале 1942-го они
            получили новое задание наркомата и были переведены на завод № 27 в
            Казань.
          </p>

          <p>
            В 1946 году оба конструктора получили Сталинскую премию за создание
            и внедрение в серийное производство винтов для штурмовиков и
            истребительной авиации, в 1947-м — за разработку конструкции новых
            типов винтов для боевых самолетов.
          </p>

          <p>
            Нарком авиапрома А. И. Шахурин в своих воспоминаниях называл
            выпускавшиеся в Павлово модификации «улучшенными винтами для
            истребительной авиации». По словам наркома, их лопасти «обеспечивали
            высокий коэффициент полезного действия для больших скоростей
            взлета»: «Бас-Дубов на базе серийного винта построил и реверсивный
            винт с мощным пружинным бустером, позволявшим улучшить торможение
            самолета при посадке включением реверса». Применение таких воздушных
            винтов на самолетах Лавочкина и Яковлева обеспечивало синхронность
            стрельбы из пулемета между вращающимися лопастями.
          </p>

          <p className={styles.vrezka}>
            Павловские винты ВИШ-105 были признаны лучшими для истребительной
            авиации, за их разработку авиаконструкторы получили Сталинскую
            премию
          </p>
        </CommonText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/gidroagregat/4/3.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._3)}>
            <Image src="/images/gidroagregat/4/4.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Rotation
