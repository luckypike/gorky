import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, Speech, CommonImages } from '../../../../'

import styles from './Weapons.module.css'

const Change = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Из всех орудий">
          <p>
            Как и многие другие предприятия страны, завод ДРО взялся за серийное производство боеприпасов. Для этого выксунцы решили в кратчайшие сроки достроить блок № 3. В конце 1942 года в нем установили спецстанки и линии. За годы войны цех произвел 859,4 тыс. корпусов мин М-82 и 94,2 тыс. корпусов авиабомб ФАБ-50 и еще 29,78 тыс. головок снарядов для реактивных установок «Катюша».
          </p>
        </MainText>

        <CommonImages content>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/drobmash/11/1.jpg" layout="fill" />

            <figcaption>
              Детский труд исполь- зовался на производ- стве корпусов для боеприпасов
            </figcaption>
          </figure>

          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/drobmash/11/2.jpg" layout="fill" />

            <figcaption>
              Выксунские мальчишки осваивали станки, на которых работали их отцы, ушедшие на фронт
            </figcaption>
          </figure>
        </CommonImages>

        <Speech
          title="«Условия работы были исключительно тяжелыми»"
          author={{
            name:
              'Главный металлург завода № 177 в годы войны В. И. Пшеничный'
          }}
        >
          «Условия работы в чугунно-литейном цехе, где отливали корпуса мин М-82, были исключительно тяжелыми. Все основные операции производились вручную. В цехе не было душевых, туалет во дворе. После работы можно было умыться только холодной водой. Особенно тяжелое впечатление производили мобилизованные рабочие из Средней Азии, занятые выбивкой литья. В грязных длинных халатах, с черными, неотмытыми руками и лицами, с торбой на шее, в которой хранилась пaйка хлеба, они вызывали к себе жалость».
        </Speech>
      </div>
    </div>
  )
}

export default Change
