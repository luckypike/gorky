import React from 'react'
import classNames from 'classnames'

import {
  MainImage,
  MainText,
  CommonText
} from '../../../../components'

// import LastImages from '../Components/LastImages'

import styles from './USSRAuto.module.css'

// import MainImg from './Images/03_MainImage.jpg'
// import FordImg from './Images/03_USSRAuto/ford.jpg'
// import Img1 from './Images/03_USSRAuto/1.jpg'
// import Img2 from './Images/03_USSRAuto/2.jpg'

export default function USSRAuto () {
  return (
    <div className={styles.root}>
      <div className={classNames(styles.page, styles.page1)}>
        <MainText title="Гигант советского автопрома">
          <p>
            История автомобильного завода берет начало в 1929 году, когда Ford Motor Company и
            СССР подписали соглашение о взаимодействии в организации массового производства машин. В годы депрессии в
            США контракт с СССР был выгодным предложением для американской компании.
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.page2)}>
        <MainImage
          image={(
            <div className={styles.mainImg}>
              {/* <img src={MainImg} /> */}
            </div>
          )}

          caption="qweqw"
        />
      </div>

      <div className={classNames(styles.page, styles.page3)}>
        <CommonText>
          <p>
            В 1929 году началась работа над первыми проектами — легковыми машинами ГАЗ-А и грузовиками ГАЗ-АА, прототипами
            которых были Ford-A и Ford-AA Согласно договору с Ford Motor Company, ГАЗ обязался закупить у американской
            компании 72 тыс. комплектов деталей для сборки машин. На Горьковском автозаводе планировали самостоятельно
            изготовлять примерно до 60% наименований узлов и деталей длясборки машин, а остальные компоненты закупать на стороне.
          </p>

          <p>
            Проектированием цехов и корпусов занималась американская компания Austin. Завод, который сначала назывался нижегородским,
            а затем получил имя одного из руководителей советского государства Вячеслава Молотова, пустили в строй 1 января 1932 года.
            В 1935 году по обоюдному согласию договор с Ford Motor Company был расторгнут. В тот же год с конвейера завода
            сошел стотысячный автомобиль ГАЗ-А.
          </p>
        </CommonText>
      </div>

      <div className={classNames(styles.page, styles.page4)}>
        {/* <LastImages
          body={(
            <div className={styles.images}>
              <figure className={styles.image}>
                <img src={Img1} />
              </figure>

              <figure className={styles.image}>
                <img src={Img2} />
              </figure>
            </div>
          )}
        /> */}
      </div>

      <div className={classNames(styles.page, styles.page5)}>
        <CommonText>
          <p className={styles.vrezka}>
            Первая модель ГАЗа, легендарная «полуторка» ГАЗ-АА, сыграла важнейшую роль в поддержании связи блокадного
            Ленинграда с внешним миром
          </p>

          <p>
            Согласно мобилизационному плану СССР, после начала Второй мировой войны в 1939 году ГАЗ должен был освоить
            производство продукции военного назначения: корпусов для мин, бронебойных снарядов, взрывателей к авиационным
            бомбам и другой продукции. Также предприятие выпускало гусеничные машины — танкетки (Т-27), плавающие танки (Т-37),
            артиллерийский тягач (Т-20 «Комсомолец»). На предприятии проектировали даже самолеты («Комсомолец 1», «Комсомолец 2»).
            Они работали на автомобильных двигателях и использовались в основном участниками аэроклубов. В начале 40-х годов
            автозавод выпускал небольшими партиями речные катера и аэросани.
          </p>
        </CommonText>
      </div>
    </div>
  )
}
