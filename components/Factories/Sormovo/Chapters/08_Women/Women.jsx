import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Speech } from '../../../../'

import styles from './Women.module.css'

const Women = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Женщины встали к станкам">
          Всеобщая мобилизация значительно повлияла на кадровый состав завода.
          Молодые мужчины ушли на фронт, их место заняли ветераны труда, которые
          успели уйти на заслуженный покой.
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/sormovo/8/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
      {/* <MainImage image={main}/> */}
      <div className={styles.page}>
        <CommonText>
          <p>
            «Мы, старики, не должны сидеть дома. В грозный и ответственный
            момент у нас еще хватит сил по-боевому работать для своей Родины»,—
            обратился к коллегам ветеран труда И. М. Олимпиев. В первый же год
            на завод вернулись более тысячи ветеранов. К станкам вставали и
            женщины, бывшие прежде домохозяйками, и подростки. Они работали
            крановщицами, пультовщицами, токарями, малярами, формовщицами,
            осваивали и другие профессии. Чтобы работать быстрее и перевыполнять
            задания, сормовичи старались усовершенствовать технологии и методы
            работы. На заводе развернулось движение рационализаторов и
            изобретателей.
          </p>
          <p className={styles.vrezka}>
            В первый же год на завод вернулись более тысячи ветеранов. К станкам
            вставали и женщины, бывшие прежде домохозяйками, и подростки
          </p>
        </CommonText>
      </div>

      <div className={styles.page}>
        <Speech
          title="«Пришла на завод в 16 лет»"
          author={{
            name: 'Ветеран завода «Красное Сормово» Л. Базина'
          }}
        >
          «О начале войны я узнала, когда Левитан объявил по радио, что на нас
          напала фашистская Германия. Папу взяли на фронт защищать Москву. Школу
          я окончить не успела, и в 15 лет пошла работать в сормовскую артель
          „Швейник“ ученицей портнихи. Шила белье для Красной Армии. Когда
          исполнилось шестнадцать и получила паспорт, пришла на завод. Меня
          отправили в отдел технического контроля. После сдачи экзамена
          присвоили разряд. Когда принимала снаряды, ставила к верстаку
          подставку. Продукцию военпреду сдавала с первого предъявления».
        </Speech>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/sormovo/8/2.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonImage>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/sormovo/8/4.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Чтобы работать быстрее и перевыполнять задания, сормовичи старались
            усовершенствовать технологии и методы работы. На заводе развернулось
            движение рационализаторов и изобретателей. Рабочие соревновались в
            увеличении темпов производства. Состязания устраивали как между
            отдельными мастерами, так и между целыми цехами. Результаты
            подводили во Дворце культуры. Победителям вручали переходящее
            Красное знамя и денежные премии. Всего за годы вой­ны коллектив
            «Красного Сормова» 33 раза получал переходящее Красное знамя
            Государственного комитета обороны. Оно передано заводу на вечное
            хранение.
          </p>
          <p className={styles.vrezka}>
            За годы войны коллектив завода «Красное Сормово» 33 раза получал
            переходящее Красное знамя Государственного комитета обороны
          </p>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._3)}>
            <Image src="/images/sormovo/8/3.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Women
