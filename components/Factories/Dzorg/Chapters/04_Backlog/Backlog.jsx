import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Columns } from '../../../../'

import styles from './Backlog.module.css'

const Backlog = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Боевой задел" />

        <Columns
          left={
            <figure className={classNames(styles.img, styles.main)}>
              <Image src="/images/dzorg/4/2.jpg" layout="fill" />
              <figcaption>Сборка и упаковка ручных гранат Ф-1</figcaption>
            </figure>
          }
          right={
            <div>
              <p>
                Проектная мощность цеха синильной кислоты солевым методом
                составляла 5 тыс. т в год, однако из-за нехватки сырья завод
                выпускал около половины этого объема. Тем не менее снаряжение
                зажигательных и химических авиабомб регулярно наращивалось.
                Авиахимбомбы ХАБ-100, ХАБ-200 и ХАБ-500 и химические снаряды
                ствольной и реактивной артиллерии АХС-76, МХ-13 и МХ-31
                снаряжали в цехах N№ 3, 4, 19 и 24. Из приказа комиссара
                химической промышленности СССР следует, что завод № 148 снаряжал
                артхимические снаряды калибром 76 мм ипритом, который шифровался
                как «вещество Р-74». К июню 1942 года завод должен был выпускать
                до 120 тыс. штук таких снарядов в месяц. Для организации
                производства станки на завод «Рулон» поставлялись с Челябинского
                тракторного завода.
              </p>

              <p>
                В том же 1942 году завод № 148 освоил производство упаковки под
                запалы гранаты Ф-1 из промасленной бумаги. В народе Ф-1 называли
                «фенюша» или «лимонка». В начале января 1942 года директор
                «Рулона» Куликов издал приказ об освоении производства, а к
                концу месяца два его цеха уже должны были суммарно выпустить 250
                тыс. патронов.
              </p>
            </div>
          }
        />
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Народный комиссариат химпрома в феврале 1943 года выпустил указ
            организовать на заводе № 148 к ноябрю этого же года производство по
            контактному методу отравляющего вещества «Розамин» (синильной
            кислоты), которое было выполнено
          </p>
        </CommonText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/dzorg/4/3.jpg" layout="fill" />
          </figure>
        </CommonImage>

        {/* <CommonImage>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/dzorg/4/1.jpg" layout="fill" />
          </figure>
        </CommonImage> */}
      </div>
    </div>
  )
}

export default Backlog
