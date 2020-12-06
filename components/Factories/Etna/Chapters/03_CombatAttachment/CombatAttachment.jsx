import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Speech } from '../../../../'

import styles from './CombatAttachment.module.css'

const CombatAttachment = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Боевое крепление">
          <p>
            Завод по производству крепежных изделий «Этна» был построен в 1898
            году в Риге В.М. Гольденбергом и П. И. Мартини.
            В 1915 году, во время Первой мировой войны, предприятие эвакуировали
            в Нижний Новгород, где год спустя его выкупил торговый дом «А.Б.
            Фрадкин и сын». После национализации в 1922 году в честь пятилетия
            советской власти завод был переименован в «Красную Этну». В 1933
            году на предприятии началось производство нормалей для только что
            построенного Горьковского автозавода.
          </p>
        </MainText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Несколько лет завод «Красная
            Этна» был филиалом ГАЗа, а в 1938 году ему вернули самостоятельность
            — предприятие начало выпускать продукцию для всего автопрома страны.
          </p>

          <p className={styles.vrezka}>
            Завод «Красная Этна» был крупнейшим производителем крепежных
            элементов и поставлял их автопрому всей страны
          </p>

          <p>
            К началу Великой Отечественной войны завод «Красная Этна» производил
            крепежные изделия, пружины и проволоку, обеспечивая лентой холодного
            проката все промышленные предприятия СССР. Цех горячего проката
            снабжал продукцией горьковские авиационный, машиностроительный
            заводы, завод «Красное Сормово».
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/etna/3/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <Speech
          title="«Орден Ленина — заслуга всех работников»"
          author={{
            name: 'Ветеран завода, директор музея «Красной Этны» Г. С. Тилунас'
          }}
        >
          «Весь завод работал на оборону, начиная с горячепрокатного цеха. Здесь
          научились катать не только стальную проволоку, но и цветные металлы,
          которые поставлялись „Красному Сормову“ на строительство танков и
          авиационному заводу для самолетов. Холоднокатаную ленту в годы войны
          выпускала только „Красная Этна“, а нужда в ней была на всех оборонных
          предприятиях. Рабочие ремонтного цеха помимо своей основной работы
          выпускали минометы. В строительном и лесотарном цехах сколачивали
          ящики под снаряды, а в цехе ширпотреба делали патронташи для
          пулеметных лент. Так что орден Ленина, полученный заводом в 1944 году,
          — бесспорная заслуга всех без исключения работников „Красной Этны“».
        </Speech>
      </div>
    </div>
  )
}

export default CombatAttachment
