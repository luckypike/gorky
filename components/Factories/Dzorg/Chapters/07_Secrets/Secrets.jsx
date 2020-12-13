import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImage, Columns } from '../../../../'

import styles from './Secrets.module.css'

const Secrets = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Органическая броня">
          <p>
            Качество бронированного стекла дзержинского завода необходимо было
            улучшать: повышать его прозрачность, пулеустойчивость и стойкость к
            свету и осадкам. В 1942 году на завод пришел приказ из Наркомата
            химической промышленности, в котором говорилось, что завод должен
            производить оргстекло только из метилметакрилата, а использовать
            этилметакрилат запрещено.
            Кроме того, нарком химпрома Первухин приказывал отделу технического
            контроля принимать стекло только прозрачностью не менее 90–92%,
            твердость его должна быть не ниже 14 кг/м² и удельной ударной
            вязкостью не менее 10 кг.см/см². Стекло должно быть светостойким, не
            желтеть и не зеленеть.
          </p>

          <p>
            Также нарком химпрома обязывал начальника центральной заводской
            лаборатории Руденко исследовать бронированное стекло с самолета
            «Тамогавк». За три дня лаборатория должна была установить рецепт
            американского бронестекла и улучшить дзержинское.
          </p>
        </MainText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/dzorg/7/2.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <Columns
          left={(
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/dzorg/7/1.jpg" layout="fill" />
            </figure>
          )}

          right={(
            <div>
              <p>
                Также заводчанам необходимо было избавиться от появления «серебра»
                на бронекозырьках — сетки мелких трещин от попадания пули. К осени
                1943 года эту задачу также удалось решить — «Рулон» начал склеивать
                бронекозырьки двойной пленкой. На эту технологию перевели не только
                дзержинское производство, но и передали ее в Челябинск, где
                располагался эвакуированный из Ленинграда завод К-4, который
                производил бронекозырьки по технологии «Рулона».
              </p>

              <p>
                Производимое «Рулоном» бронестекло К-4 при толщине 64 мм и массе 120
                кг/м² не пробивалось 7,62-мм бронебойной пулей при стрельбе на
                дистанции 30 м. К 1943 году была создана улучшенная броня марки К-5,
                не пробиваемая оружием 13–20-мм калибров, в том числе пулеметами
                MG-131 и MG-151, включая вариант бикалиберной пушки
                MG-151/20.Технологию производства улучшали всю войну и после ее
                окончания. И уже английским и германским заводам приходилось в своих
                научных институтах исследовать секреты производства дзержинских
                химиков — снятые бронекозырьки «Рулона» видели на зарубежных
                предприятиях.
              </p>
            </div>
          )}
        />
      </div>
    </div>
  )
}

export default Secrets
