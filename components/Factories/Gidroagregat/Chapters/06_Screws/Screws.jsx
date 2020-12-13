import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImage, GunsOfWar } from '../../../../'

import styles from './Screws.module.css'

const Screws = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Не только винты">
          <p>
            Как и на других оборонных предприятиях страны кроме основной
            специализации в производстве завода №467 были предусмотрены
            дополнительные: завод выпускал боеприпасы.
            Еще на этапе завершения строительных работ на заводе был организован
            цех по изготовлению ручных гранат Дьяконова (РГД-33). Очевидцы
            отмечали, что хотя вокруг все еще кипела строительная жизнь с
            неизбежными грязью и мусором, в самом цеху всегда царила идеальная
            чистота. Выпускаемая продукция была высочайшего качества — на
            испытаниях из 100 гранат взрывались 96–97.
          </p>
        </MainText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/gidroagregat/6/1.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <GunsOfWar title="Ручная граната Дьяконова (РГД-33)">
          Противопехотная осколочная граната дистанционного типа,
          разработанная М. Г. Дьяконовым. Выпускалась в 1933–1941 гг. Широко
          использовалась советскими войсками в первые годы Великой
          Отечественной войны. Основным поражающим элементом РГД-33 являлись
          осколки. Специальный кожух с насечками надевался на гранату и при
          подрыве давал более 2000 осколков, разлетавшихся на расстояние до 30
          м. Механизм гранаты воспламенял капсюль только после броска — за
          счет действия инерции тяжелого корпуса при броске. Поэтому даже
          стоящая на боевом взводе граната при случайном падении не взрывалась
          и была пригодна для использования. Граната поступала в войска в
          разобранном виде: корпус со взрывчатым веществом (чаще всего это был
          тротил), рукоять и запал. Бойцы собирали гранаты перед боем, а запал
          вставляли непосредственно перед применением. С появлением более
          простых и удобных боеприпасов РГД-33 была снята с производства.
        </GunsOfWar>
      </div>
    </div>
  )
}

export default Screws
