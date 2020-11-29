import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../'

import styles from './Victory.module.css'

const Victory = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="«Победа» сошла с конвейера">
          <p>
            Об окончании войны многие заводчане узнали, находясь на своих
            рабочих местах, — несмотря на то, что по радио о капитуляции
            Германии сообщили ночью, сотрудников в цехах было много. Наутро
            директор завода И.К. ­Лоскутов издал приказ, в котором руководство
            предприятия поздравляло коллектив с победой.
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/gaz/14/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            В годы войны ГАЗ не прекращал проектировать гражданские автомобили,
            которые планировалось выпустить после окончания войны. Так,
            легендарную «Победу» — ГАЗ-М-20 — разрабатывали с 1943 года под
            руководством главного конструктора А.А. Липгарта. Автомобиль
            «Победа» проектировали два года — с февраля 1943 года по февраль
            1945-го. В 1944 году уже начали создавать полноразмерные макеты
            автомобилей-прототипов. Серийный выпуск ГАЗ-М-20 начался уже в 1946
            году — спустя год после окончания войны. Автомобиль назвали в честь
            победы СССР над фашистской Германией. Его конструкция неоднократно
            дорабатывалась, завод выпускал и спортивный вариант, и парадный —
            для военного министерства. За все время ГАЗ произвел более 240 тыс.
            автомобилей «Победа».
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/gaz/14/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/gaz/14/3.jpg" layout="fill" />
          </figure>
        </CommonImage>
        <CommonText>
          <p className={styles.vrezka}>
            Сейчас ГАЗ выпускает легкие и среднетоннажные коммерческие
            автомобили, занимая более 50% российского рынка. Продукция ГАЗа
            поставляется в 40 стран мира
          </p>
        </CommonText>
      </div>
    </div>
  )
}

export default Victory
