import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImages, CommonText } from '../../../../'

import styles from './Smithy.module.css'

const Smithy = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Кузница победы" />
        <CommonText>
          <p>
            Спустя 1418 тяжелых дней и ночей наступила победа. На «Красном якоре» царило всеобщее ликование, заводчане
            поздравляли друг друга со слезами на глазах. За отличное выполнение фронтовых заказов «Красный якорь»
            неоднократно получал государственные благодарственные письма. С июня 1945 года завод перешел на выпуск
            мирной продукции. Предприятие успешно осуществило амбициозные проекты. На «Красном якоре» была создана
            вторая очередь поточно-механизированной линии по производству цепей диаметром 28–40 мм, открыт новый
            инструментальный цех. Кроме того, были организованы три специализированных цеха с замкнутым циклом
            производства легких, средних и тяжелых цепей. Завод вернул себе славу крупнейшего отечественного
            производителя цепей разного назначения.
          </p>
          <p className={styles.vrezka}>
            За отличное выполнение фронтовых заказов «Красный якорь» неоднократно получал государственные
            благодарственные письма
          </p>
        </CommonText>

        <CommonImages>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/yakor/9/1.jpg" layout="fill" />
            <figcaption>Сварочный узел машины немецкой фирмы ZAC</figcaption>
          </figure>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/yakor/9/2.jpg" layout="fill" />
            <figcaption>Цех с линиями станковавтоматов по вязке цепей</figcaption>
          </figure>
        </CommonImages>
      </div>
    </div>
  )
}

export default Smithy
