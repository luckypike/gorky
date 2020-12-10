import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Speech } from '../../../../'

import styles from './Baby.module.css'

const Baby = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Юркие «Малютки»">
          <p>
            Небольшие по размерам «Малютки», в отличие от крупных подлодок, на «Красном Сормове» закладывали сериями —
            обычно по три.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles.main)}>
              <Image src="/images/sormovo_sudo/6/1.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </MainText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Они строились непосредственно перед заводскими цехами с помощью треног с талями — подвесными грузоподъемными
            устройствами. Затем их отправляли на сдаточную базу. «Малютки» XII серии оказались более выносливыми по
            сравнению с предшественниками. Их более мощный двигатель позволил увеличить скорость до 14 узлов. Повысилась
            маневренность и скрытность подводной лодки, а вести наблюдение через перископ можно было не только с
            центрального поста, но и из рубки.
          </p>
          <p>
            Сормовские «Малютки» воевали на Балтийском флоте. Первой открыла боевой счет подлодка М-97 18 октября 1941
            года. Она потопила вражеское судно, и весь состав наградили орденами и медалями. Командир Александр
            Мыльников был удостоен ордена Ленина. Субмарины этой серии служили на Северном, Черноморском, Тихоокеанском
            и Балтийском флотах.
          </p>
          <Speech
            title="«Результативность следует признать вполне достойной»"
            author={{ name: 'Доктор военных наук К. Сивков:' }}
          >
            «В отличие от предшественниц, подлодки XII серии оказались вполне успешными и конкурентоспособными в
            сравнении со старшими по классу кораблями. На счету „Малюток“ XII серии 15 потопленных и пять поврежденных
            транспортов и боевых кораблей, по достоверным данным, подтвержденным обеими сторонами. Результативность
            следует признать вполне достойной, если принять во внимание условия, в которых пришлось действовать».{' '}
          </Speech>
        </CommonText>
      </div>
    </div>
  )
}

export default Baby
