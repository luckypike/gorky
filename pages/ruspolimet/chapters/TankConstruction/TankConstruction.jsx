import React from 'react'

import {
  MainText,
  CommonText
} from '../../../../components'

import styles from './TankConstruction.module.css'

const TankConstruction = () => {
  return (
    <div className={styles.root}>
      <MainText title="Металлурги-танкостроители">
        В чугунолитейном цехе отливали стальные броневые башни, газовые и
        смотровые люки, а также пулеметные амбразуры для танков, делали катки
        для гусениц танков.
      </MainText>
      {/* <MainImage image={main}/> */}
      <div>
        <CommonText>
          Чтобы КМЗ смог освоить отливку броневых танковых башен, весной 1942
          года на завод прибыл представитель «Красного Сормова» с шлаковой
          моделью такой башни. «Цех превратился в лабораторию. Только на девятые
          сутки смог я попасть домой, но задание было выполнено», — рассказывал
          техник конструкторского бюро КМЗ Н. И. Ковалев. Ветеран Г. Долбилкин
          вспоминал, что чугунолитейщики на трехтонной электропечи заваливали
          шихту вдвое больше расчетного тоннажа: «При недостаточной
          грузоподъемности электрокрана, единственного на этом сложном
          технологическом участке, люди отливали тяжелые стальные башни танка
          Т-34. При постоянном риске поломки оборудования был установлен
          постоянный, ежечасный контроль за его состоянием. В случае надобности
          для быстрой замены изношенных узлов и деталей всегда были приготовлены
          новые узлы и новые детали».
        </CommonText>
        <CommonText>
          Ремонтно-механический цех до войны изготавливал узлы и запасные части
          для основного оборудования завода, и загрузка всегда была
          максимальной. С началом войны объем рядовых работ увеличился, и
          пришлось освоить выпуск оборонной продукции. А.Рабинович, который все
          военные годы проработал в ремонтно-механическом цехе, рассказывал, что
          рабочим необходимо было освоить выпуск танковых погонов, заглушки
          танкового корпуса, лючков и башенных листов к танкам, броневых листов
          корпуса. Еще одним заданием стала организация сборки корпусов легких
          танков Т-60 на подсобных площадях цеха. Выпуском корпусов Т-60 был
          загружен и термический цех. Выросло количество заказов и у
          бандажепрокатного цеха, но работал он теперь не только на
          железнодорожный транспорт. Цех освоил прокат погонных колец для узла
          вращения башни танков Т-34, КВ, ИС. Новые кольца, которые ковали и
          прокатывали в бандажном цехе, были больше железнодорожных. Сотрудники
          цеха на участке сдачи и приемки продукции из-за отсутствия кранов
          вручную катали «тяжеленные баранки» диаметром более 2 м.
        </CommonText>
      </div>
      {/* <Gallery image={main}/> */}
    </div>
  )
}

export default TankConstruction
