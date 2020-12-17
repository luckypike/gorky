import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainImage, MainText, Speech } from '../../../../'

import styles from './Echelons.module.css'

const Echelons = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainImage>
          <figure className={classNames(styles.img, styles.intro)}>
            <Image src="/images/petrovsky/img.jpg" layout="fill" />
          </figure>
        </MainImage>
      </div>

      <div className={styles.page}>
        <MainText title="Эшелонами в Горький">
          <p>
            В начале войны завод имени Г. И. Петровского был эвакуирован в
            Горький из Киева. Первый эшелон с оборудованием и людьми прибыл 19
            июля 1941 года, последний — 27 июля 1941 года. Подготовленных
            производственных площадей для перебазированного завода не было,
            однако уже с сентября предприятие начало свою работу на разрозненных
            площадках.
          </p>

          <p>
            Основные цехи были сформированы на базе законсервированной мельницы
            № 3 на улице Черниговской, а медночугунный литейный цех размещен в
            литейных мастерских трамвайного парка на ул. Лядова. Площадки завода
            также располагались на складах Окского речного пароходства и в
            недостроенном здании нагорного промторга.
          </p>
        </MainText>

        <Speech
          title="«Не было ни жалоб, ни малодушия, ни маловерия»"
          author={{
            name:
              'Директор завода им. Г. И. Петровского в 1942–1946 гг. И. М. Слуцкий:'
          }}
        >
          «С первых дней войны для коллектива завода наступило время тяжелых
          испытаний. Под бомбами, в труднейших условиях завод готовился к
          эвакуации. Все понимали важность приказа — не оставлять врагу ничего
          из оборудования и ценных материалов. С подлинным героизмом рабочие,
          инженеры, их семьи работали на демонтаже оборудования, на погрузке
          эшелонов. С тяжелым сердцем люди прощались с заводом, на котором
          выросли, возмужали и научились работать. Но люди сознавали, что это
          суровая необходимость, вызванная военной обстановкой. Не было ни
          жалоб, ни малодушия, ни маловерия».
        </Speech>
      </div>
    </div>
  )
}

export default Echelons
