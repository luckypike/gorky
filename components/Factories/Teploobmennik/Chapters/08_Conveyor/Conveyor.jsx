import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../'

import styles from './Conveyor.module.css'

const Conveyor = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Первый конвейер">
          <p>
            Спецификой производства радиаторов было преобладание ручного труда.
            Операции были нехитрыми, но трудоемкими: сборка со сваркой и пайкой,
            ручные давильные и доводочные работы, химическая обработка медных
            сплавов и сталей, листовая штамповка, свободная ковка.
          </p>
        </MainText>
      </div>

      <div className={styles.page}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/teploobmennik/8/1.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            В мае 1943 года директором завода стал главный инженер В. В. Сычев.
            Под его руководством внедрялись поточно-конвейерные линии и все
            новые производственные процессы. Суточный выпуск продукции достиг
            125 радиаторов.
          </p>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Регулярно перевыполняя план, завод № 469 был в числе передовых
            предприятий отрасли и участвовал во всех всесоюзных соревнованиях.
            Так, до конца 1944 года коллектив обязался снизить себестоимость
            продукции на 17%, а производительность труда увеличить на 10%.
            В ноябре два основных цеха перешли на хозяйственный расчет. За счет
            рационализаторских предложений трудоемкость обработки деталей для
            радиаторов была снижена наполовину.
          </p>

          <p>
            Росла номенклатура продукции. Кроме радиаторов в 1943 году на заводе
            № 469 было налажено производство других комплектующих для самолетов:
            патронных коробок для авиационной пушки Б-20, металлических оправ
            бронекозырьков и др. В 1944 году на предприятии начался выпуск
            радиаторов для самоходной артиллерийской установки СУ-76, радиаторов
            для гусеничных тракторов СХТЗ.
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/teploobmennik/8/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Conveyor
