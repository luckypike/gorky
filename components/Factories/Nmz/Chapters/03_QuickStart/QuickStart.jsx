import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImage } from '../../../../'

import styles from './QuickStart.module.css'

const QuickStart = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Быстрый старт">
          <p>
            Еще до Первой мировой войны в Нижнем Новгороде обсуждался вопрос расширения производственных мощностей
            Сормовского завода. Остро стояла задача развития металлургического блока: стране были нужны паровозы, вагоны
            и дизели. На новой площадке планировалось построить фасонолитейный и кузнечный цехи, а также спеццехи для
            выпуска 76-мм полковых пушек и изготовления снарядов.
          </p>
          <p>
            В 1931 году строящиеся цехи были выделены в самостоятельный завод «Новое Сормово», поступивший в подчинение
            Всесоюзному орудийно-арсенальному объединению. До 1933 года предприятие в основном выпускало гражданскую
            продукцию: тракторные запчасти, вагонные, паровозные и трамвайные оси и валы бурового оборудования.
          </p>
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/nmz/3/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default QuickStart
