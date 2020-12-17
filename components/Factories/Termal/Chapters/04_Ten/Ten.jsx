import React from 'react'
import cn from 'classnames'
import Image from 'next/image'

import { MainText, CommonImage } from '../../../../'

import styles from './Ten.module.css'

const Ten = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Мирный тэн">
          В послевоенные годы производство электрооборудования для судостроения,
          тэнов, осталось основным профилем завода им. Ульянова. Уже через
          несколько лет общий валовой выпуск продукции в 1955 году по сравнению
          с 1946-м составил 574,8%. В 1957 году началось строительство новых
          корпусов на проспекте Гагарина, куда предприятие окончательно
          переехало в 1964 году и где электротехническое производство
          располагается до сих пор, став частью концерна «Термаль». Сегодня
          концерн является разработчиком и производителем электротермического
          оборудования для судов, железнодорожного транспорта и предприятий
          общественного питания.
        </MainText>

        <CommonImage content>
          <figure className={cn(styles.img, styles._3)}>
            <Image src="/images/termal/4/3.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Ten
