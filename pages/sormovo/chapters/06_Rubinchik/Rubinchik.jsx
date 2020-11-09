import React from "react";
import classNames from "classnames";
import Image from "next/image";

import {
  MainText,
  CommonText,
  CommonImage,
  Speech,
} from "../../../../components";

import styles from "./Rubinchik.module.css";

const Rubinchik = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Рубинчик Ефим Эммануилович (1903–1991)">
          С 1927 по 1938 год находился на партийной работе в Москве. С 1940 года
          — директор Коломенского завода. В 1942 году возглавил завод «Красное
          Сормово». С 1955 по 1957 год руководил Горьковским заводом имени
          Петровского, с 1957 по 1985 год возглавлял Управление
          материально-технического снабжения Волго-Вятского экономического
          региона. Награжден 21 правительственной наградой, в том числе —
          четырьмя орденами Ленина и орденом Кутузова. Ему было присвоено звание
          генерала.
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/sormovo/6/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
      {/* <MainImage image={main}/> */}
      <div className={styles.page}>
        <CommonText>
          <p>
            Ефим Эммануилович Рубинчик возглавил «Красное Сормово», на тот
            момент — завод №112, в тяжелый 1942 год. В первый год войны
            судостроительный завод как родоначальника советского танкостроения
            обязали в срочном порядке наладить производство танков Т-34.
            С каждым днем фронту требовалось все больше техники, и в мае 1942
            года перед новым директором поставили задачу увеличить выпуск Т-34 в
            несколько раз. «Красное Сормово» смогло не только выполнить, но и
            перевыполнить план. Первые «сверхплановые» танки завод начал
            выпускать в июле, уже в августе предприятие впервые получило высокую
            награду — переходящее Красное знамя государственного комитета
            обороны. Это знамя завод удерживал 33 месяца подряд — это абсолютный
            рекорд. Позже «Красное Сормово» получило Красное знамя на вечное
            хранение.
          </p>
          <p>
            Как чуткий руководитель Е. Э. Рубинчик понимал, что на производстве
            необходимы высококвалифицированные сотрудники. Именно под его
            руководством и по его инициативе на заводе «Красное Сормово» в 1942
            году организовали курсы обучения для молодых специалистов.
            Профессионалы своего дела передавали знания тем, кто только начал
            трудиться. Это помогло поддержать преемственность и сохранять
            технологии на производстве даже в период дефицита кадров. <br /> За
            годы войны под руководством Ефима Рубинчика завод «Красное Сормово»
            поставило фронту больше 12 тыс. танков Т-34 и несколько миллионов
            артиллерийских снарядов. В январе 1945 года Ефим Рубинчик был
            удостоен звания генерала инженерно-танковой службы. В конце Великой
            Отечественной войны он был награжден орденом Кутузова первой
            степени.
          </p>
        </CommonText>
      </div>

      <div className={styles.page}>
        <Speech
          title="«Он знал по имени-отчеству всех старых рабочих»"
          author={{
            name: "Ветеран завода «Красное Сормово» В. Ломанов",
          }}
        >
          «Я часто видел директора в цехе, когда он приходил узнать, как идут
          дела. Он знал по имени-отчеству всех старых рабочих. Народ очень тепло
          отзывался о своем директоре, потому что чувствовал его заботу и
          поддержку. Рубинчик всегда появлялся в форме генерала. Роста
          небольшого, но исходил от него какой-то магнетизм. Говорил с подъемом,
          без бумажки, мог затронуть душу, вдохновить на новые трудовые рекорды.
          Был очень человечным — так говорили о нем все. Действовал не приказом,
          а убеждением».
        </Speech>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/sormovo/6/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  );
};

export default Rubinchik;
