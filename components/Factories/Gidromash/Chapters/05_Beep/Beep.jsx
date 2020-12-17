import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, CommonImages } from '../../../../'

import styles from './Beep.module.css'
import Columns from '../../../../Columns/Columns'

const Beep = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Спасительный «Гудок»">
          <p>
            В Горьком к быстрому прибытию первых эшелонов москвичей оказались не
            готовы. Несколько дней вдоль путей на протяжении двух с лишним
            километров стояли без движения ящики со станками и другим
            оборудованием, деталями, инструментом, полуфабрикатами, материалами,
            «теплушки» с людьми.

            31 октября 1941 года авиазавод № 21 им. С. Орджоникидзе выделил
            москвичам 1288 кв. м в помещениях своего филиала № 2 в Канавине (там
            разместился механозаготовительный цех крупных и средних деталей),
            одновременно заводу № 119 предоставили производственные мастерские
            авиационного техникума на площади 1 Мая (сейчас — площадь М.
            Горького), где расположили сборочный цех.
          </p>
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/gidromash/5/1.jpg" layout="fill" />

            <figcaption>Завод «Гудок Октября» отдал все свои площади под производство эвакуированного завода № 119</figcaption>
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            Руководить обустройством было поручено начальнику одного из ведущих
            цехов завода № 21 А. А. Волкову. Авиазавод был заинтересован
            смонтировать оборудование москвичей как можно быстрее: площадка уже
            была забита сотнями истребителей на деревянных подпорках вместо
            шасси. Семьи разместили в общежитии авиационного техникума и в
            складском помещении бывшей Нижегородской ярмарки.
          </p>

          <p>
            Все сразу выходили на разгрузку. Транспорта не хватало — использовали сани, волокуши из
            листового железа. Уже ветераном А. А. Волков вспоминал: «Трудились
            по 16–17 часов в сутки. Немного отдохнув, снова принимались за
            монтаж, а работы было предостаточно: не только смонтировать
            оборудование, но и отыскать приспособления, инструмент, организовать
            складское хозяйство».

            Едва успевали установить станки, подвести проводку, как на них
            тотчас начинали отладку, а затем и изготовление деталей. С 8 ноября
            сначала из запасов, вывезенных из Москвы, а затем и из деталей,
            сделанных на новом месте, в мастерских авиатехникума начался выпуск
            отдельных агрегатов.
          </p>
        </CommonText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <Columns
          left={(
            <figure className={classNames(styles.img, styles._3)}>
              <Image src="/images/gidromash/5/4.jpg" layout="fill" />
            </figure>
          )}

          right={(
            <div>
              <p>
                Площадей под оборудование катастрофически не хватало. Если в Москве
                завод № 119 занимал 17000 кв. м, то в Горьком вся его площадь
                поначалу не превышала 4000 кв. м. На просьбы руководства
                эвакуированного завода власти решили передать ему всю территорию
                завода «Гудок Октября» в Канавине — еще около 5 тыс. кв. м. До войны
                это предприятие выпускало вспомогательные машины для бумажной
                промышленности и оборудование для литейных цехов, а в военное время
                — корпуса мин и траки для гусениц танка Т-34. Можно сказать, что
                этот ныне не существующий завод сыграл особую роль в судьбе не
                только эвакуированного завода им. Маленкова, но и авиазавода № 21:
                без расширения завода № 119 самолеты Лавочкина долго не получили бы
                необходимые комплекты шасси, а значит, само существование
                производства истребителей семейства «Ла» в Горьком оказалось бы под
                вопросом — в военное время все решения принимались быстро.
              </p>
            </div>
          )}
        />

        <CommonImages>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/gidromash/5/2.jpg" layout="fill" />

            <figcaption>
              До войны «Гудок Октября» выпускал станки для бумажной промышленности и литейных цехов
            </figcaption>
          </figure>

          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/gidromash/5/3.jpg" layout="fill" />

            <figcaption>
              Его территория — около 5 тыс. кв. м — позволила разместить почти все цехи московского завода
            </figcaption>
          </figure>
        </CommonImages>

        <CommonText>
          <p>
            В цехах «Гудка Октября» разместились механический,
            ремонтно-механический и сборочный цехи, заготовительная мастерская,
            цех покрытий, литейная мастерская, большинство складов, химическая
            лаборатория и заводоуправление.
          </p>

          <p>
            В 1942 году за счет небольших мастерских завода «Горьремвес»
            производственные площади завода им. Маленкова выросли еще почти на
            1500 кв. м. В итоге площадь всех подразделений составила около 7500
            кв. м. Некоторым цехам и отделам места так и не нашлось — например,
            испытание агрегатов, а значит, и их окончательную сборку завод был
            вынужден проводить непосредственно на авиазаводе № 21.
            В условиях разбросанности цехов по разным частям города, нагорной и
            заречной, завод проработал всю войну, и это сильно осложняло
            производственный процесс. Несмотря на это, завод № 119 смог
            сохранить юридическую самостоятельность — а ведь часто с потерей
            территориальной целостности эвакуированные предприятия превращались
            в подразделения принимающей стороны.
          </p>

          <p className={styles.vrezka}>
            18 дней прошло с момента отправки из Москвы первого эшелона с оборудованием завода до выпуска первых агрегатов в Горьком
          </p>
        </CommonText>
      </div>
    </div>
  )
}

export default Beep
