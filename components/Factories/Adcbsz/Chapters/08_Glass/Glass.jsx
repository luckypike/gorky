import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../'

import styles from './Glass.module.css'

const Glass = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Стекло — в мир!">
          <p>
            С победой завод вернулся к производству оконного стекла. Коллективу
            была поставлена задача довести объем производства в 1950 году до 5
            млн кв. м в год, что вдвое превышало довоенный уровень. Выпуск
            автостекла для грузовых автомобилей планировалось увеличить в 2,6
            раза, триплекса для легковых — в 4 раза. Отдельно оговаривались
            планы по новым легковым автомобилям ЗИС-110 и «Победа» — им
            требовалось особое полированное стекло, которое планировалось
            выпускать ежемесячно до 500 кв. м. Впоследствии все главные новинки
            Горьковского автозавода комплектовались борскими стеклами.
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/adcbsz/8/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Самым значительным достижением борских стеклоделов в первые
            послевоенные годы не только в масштабе самого предприятия, но и для
            отрасли в целом было освоение в 1948 году производства стекла в 10
            раз прочнее обычного, прочнее триплекса, не бьющегося при ударах и
            устойчивого к вибрациям. Главный инженер завода А.А. Грачев изобрел
            новый способ термической обработки стекла — во вращающейся камере,
            так называемую роторную обдувку. За это изобретение он получил
            Сталинскую премию. Так начиналась новая, мирная жизнь для Борского
            стеклозавода. Сегодня это один из крупнейших в стране производителей
            автомобильного и полированного стекла, оснащенный по последнему
            слову техники. Завод является частью AGC Group.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/adcbsz/8/1.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>
    </div>
  )
}

export default Glass
