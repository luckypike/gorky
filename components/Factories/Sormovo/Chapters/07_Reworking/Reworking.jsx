import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Speech } from '../../../../'

import styles from './Reworking.module.css'

const Reworking = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Легенду доработали">
          После Курской битвы в 1943 году стало ясно, что Т-34 необходимо
          доработать. Тяжелые танки «Тигр» и «Пантера», появившиеся у немцев,
          были мощнее, и оказалось, что Т-34 тяжело бороться с ними. Танку
          потребовалась более мощная пушка. Модернизацией по указу
          Государственного комитета обороны занялись конструкторы завода
          «Красное Сормово» совместно со специалистами завода №183.
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/sormovo/7/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Боевую машину оснастили 85-мм пуш­кой, новая модификация получила
            индекс Т-34-85. Благодаря новой башне увеличенного объема возросла
            бронезащита танка. При этом он почти не утратил своих преимуществ в
            поединках с «Тиграми и «Пантерами» — подвижности и маневренности.
            Позже Т-34-85 был при­знан лучшим танком того времени и стал одним
            из символов Второй мировой войны. Всего за годы войны «Красное
            Сормово» дало фронту более 12 тыс. танков. Еще около 2тыс. боевых
            машин предприятие отремонтировало.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/sormovo/7/2.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <Speech
          title="«Образцовое выполнение задания»"
          author={{
            name:
              'Народный комиссар танковой промышленности в 1941–1942 гг. В. А. Малышев'
          }}
        >
          «Прошу передать мои горячие пожелания дальнейших успехов в работе
          группе конструкторов и другим работникам завода, награжденным
          правительством орденами и медалями за образцовое выполнение задания по
          усовершенствованию конструкции и улучшению боевых качеств танков
          Т-34».
        </Speech>

        <CommonImage>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/sormovo/7/3.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Reworking
