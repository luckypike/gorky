import React from 'react'
// import classNames from "classnames";
// import Image from "next/image";

import { MainText } from '../../../../'

import styles from './Katyusha.module.css'

const Katyusha = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Все для «Катюш»!">
          <p>
            В августе 1941 года поступил заказ на изготовление камеры сгорания к
            реактивному снаряду М-13 для пусковых установок БМ-13 «Катюша». На
            фронте говорили, что мощность разрывного заряда М-13 была «как шесть
            противотанковых гранат». В декабре из-за отсутствия заготовок ГЗФС
            пришлось переключиться на производство камеры сгорания к 82-мм
            реактивному осколочному снаряду М-8. Всего за первый год войны
            предприятие изготовило свыше 5,1 тыс. узлов для М-8.
          </p>
        </MainText>
      </div>
    </div>
  )
}

export default Katyusha
