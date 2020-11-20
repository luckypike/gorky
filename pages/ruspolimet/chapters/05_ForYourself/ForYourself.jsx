import React from "react";
import classNames from "classnames";
import Image from "next/image";

import { MainText, CommonText, CommonImage } from "../../../../components";

import styles from "./ForYourself.module.css";

const ForYourself = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="«За себя и за того парня»">
          <p>
            Постановлением СНК СССР от 11 сентября 1941 года Кулебакский
            металлургический завод им. Кирова, до этого времени относившийся к
            Наркомату судостроения и изготавливавший сталь для судов, был
            передан в Народный комиссариат танковой промышленности и получил №
            178.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles.main)}>
              <Image src="/images/ruspolimet/5/1.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/ruspolimet/5/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p className={styles.vrezka}>
            Иван Федорович Скиба возглавил завод в апреле 1940 года. Ему было 38
            лет. Всю войну он руководил предприятием, несмотря на молодой
            возраст, подчас невыносимые условия труда и ответственность.
            Сотрудники завода вспоминают, что он был крайне скромным человеком
          </p>
          <p>
            Пока в первые месяцы войны эвакуировались заводы из западных
            регионов СССР, Кулебакскому металлургическому пришлось в рекордные
            сроки осваивать производство новых видов продукции, необходимых для
            обороны страны. КМЗ стал выпускать быстрорежущую и инструментальную
            сталь, легированную сталь, прокатывал броневой лист, в том числе для
            выксунского завода дробильно-размольного оборудования на самолеты
            Ил-2, освоил прокат легированного профиля балки носа для Т-34
            (носовая часть корпуса, состоящая из передней балки, трех броневых
            листов, крышки люка водителя и броневого колпака пулемета.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._2)}>
              <Image src="/images/ruspolimet/5/3.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Изготавливал погоны под танковые башни (место крепления башни к
            корпусу) и защитные спинки сидений для летчиков. Конструкцию балки
            Т-34, повысившую прочность лобовой части корпуса, предложили
            усовершенствовать именно конструкторы КМЗ.
          </p>
          <p>
            По данным Горьковского комитета обороны, трудоемкость
            производственных процессов на КМЗ по сравнению с 1940 годом выросла
            на 68,5%. Предприятию было необходимо модернизировать оборудование и
            менять технологию производства. Директор завода Иван Федорович Скиба
            ввел особый режим работы и организовал специальный технический отдел
            — СТО. Этот отдел проработал всего шесть месяцев — за короткий срок
            его сотрудники разработали новые технологические процессы
            производства, определились с их технической оснасткой и организовали
            выпуск новой продукции для фронта. После того, как все разработки
            были внедрены в производство, сотрудники вернулись к исполнению
            своих обязанностей в цехах.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._3)}>
              <Image src="/images/ruspolimet/5/4.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._4)}>
            <Image src="/images/ruspolimet/5/5.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  );
};

export default ForYourself;
