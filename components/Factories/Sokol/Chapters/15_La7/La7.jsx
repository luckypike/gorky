import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {
  MainText,
  CommonText,
  CommonImage
} from '../../../../'

import styles from './La7.module.css'

const La7 = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Ла-7: крылья победы">
          <p>
            Истребитель Ла-7, поднявшийся в воздух в январе 1944 года, еще
            называют «эталоном Ла-5 1944 года» — самолетом, вобравшим в себя все
            передовые идеи конструкторов завода №21 и рацпредложения того
            времени.
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/sokol/15/4.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonImage>
          <figure className={classNames(styles.img, styles._3)}>
            <Image src="/images/sokol/15/3.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Кроме всех преимуществ Ла-5 в скорости, легкости и маневренности,
            доставшихся и Ла-7, летчики отмечали хороший обзор, просторную
            кабину, удобную ручку управления истребителем, а главным недостатком
            называли жару в кабине.
          </p>

          <p>
            15 марта 1944 года ГКО приказал с мая начать выпуск нового
            истребителя без снижения достигнутого заводами темпа. То есть
            авиазавод №21 должен был выпускать 17 машин в сутки (еще три
            истребителя в сутки выпускал московский завод № 381).
          </p>

          <p>
            Историки отмечают, что это стало возможным только за счет роста
            производительности труда: новых площадей, станков и рабочей силы
            предприятия не получали.
          </p>

          <p>
            В этих напряженных условиях встречались и случаи производственного
            брака. Например, в феврале 1945 года во время испытаний оружия
            самолета у него срезало лопасти винта — летчику пришлось
            воспользоваться парашютом. Оказалось, что на истребителе ошибочно
            установили шестерни привода синхронизатора от мотора с другой
            редукцией.
          </p>

          <p className={styles.vrezka}>
            Рост объемов производства обеспечивался только увеличением
            производительности труда: новых площадей, станков и рабочей силы не
            было
          </p>
        </CommonText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/sokol/15/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/sokol/15/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p className={styles.vrezka}>
            Скорость, легкость, маневренность, хороший обзор, удобное управление
            — летчики отмечали массу преимуществ нового самолета Ла-7
          </p>

          <p>
            А в апреле 1945 года выяснилось, что во время установки консолей
            крыла одного из истребителей, когда стыковочные отверстия
            центроплана и консолей не совпали, слесарь-сборщик посадил болты
            лонжерона с помощью кувалды.
          </p>
        </CommonText>
        <CommonImage>
          <figure className={classNames(styles.img, styles._4)}>
            <Image src="/images/sokol/15/5.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Но в большинстве случаев Ла-7 имел значительные преимущества по
            скорости полета, скороподъемности и маневренности перед своим
            ближайшим противником — Focke-Wulf 190D. Историки отмечают, что
            улучшение летно-технических данных Ла-7 по сравнению с Ла-5 изменило
            тактику наших истребителей над полем боя: у сковывающей группы
            отпала необходимость находиться с большим превышением над ударной,
            так как Ла-7 в случае необходимости быстро успевал набрать высоту и
            занять выгодную позицию. Поэтому во время патрулирования при
            обнаружении самолетов противника независимо от их числа Ла-7
            немедленно принимали бой.
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._5)}>
            <Image src="/images/sokol/15/6.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            За создание истребителя Ла-7 в ноябре 1944 года ОКБ С. А. Лавочкина
            было награждено орденом Ленина, а сам главный конструктор в 1946
            году был удостоен очередной Сталинской премии. «Самолет Ла-7 явился
            своеобразным итогом работы советских авиаконструкторов по развитию
            винтомоторной истребительной авиации в годы Великой Отечественной
            войны», — такую оценку дал истребителю нарком авиапромышленности
            А.И. Шахурин.
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._6)}>
            <Image src="/images/sokol/15/7.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default La7
