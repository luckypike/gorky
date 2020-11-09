import React from "react";
import classNames from "classnames";
import Image from "next/image";

import {
  MainText,
  CommonText,
  CommonImage,
  Speech,
} from "../../../../components";

import styles from "./Ammunition.module.css";

const Ammunition = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Боеприпасы для фронта">
          Опыт изготовления боеприпасов у «Красного Сормова» уже был. Завод с
          начала XX века выпускал гаубичные бомбы и трехдюймовые шрапнели. С
          началом Великой Отечественной войны на предприятии увеличили задание
          по выпуску снарядов 203-мм и ­107-мм в несколько раз. Для этого
          необходимо было переналадить оборудование и станки. На заводе создали
          отдел боеприпасов.
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/sormovo/9/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            В начале июля 1941 года бюро Сормовского райкома партии потребовало
            от предприятия «организовать круглосуточную работу на всех
            операциях, в двухдневный срок поставить и смонтировать недостающее
            оборудование, немедленно перевести работу цеха на полную мощность и
            обеспечить в оставшиеся дни выполнение плана июля месяца». Рабочие
            буквально жили в цехах, налаживая производство, выполняя и
            перевыполняя суточные задания.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/sormovo/9/1.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <Speech
          title="«Станок — наше оружие»"
          author={{
            name: "Ветеран завода «Красное Сормово» Е. Хабалова",
          }}
        >
          «Работали под девизами: „Станок — наше оружие“, „Работать за себя и за
          ушедшего на фронт товарища“. Работали по 12 часов в сутки, а надо было
          — и по 18. Цех взял шефство над двумя палатами госпиталя № 5810,
          который разместился в школе № 88. Шили для раненых кисеты с вышивкой
          „Смелому бойцу“, помогали писать письма родным…».
        </Speech>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Осенью 1941 года «Красное Сормово» приступило к производству
            крышки-сопла к снаряду М-8 и к отливке стальных головок для 250-кг
            фугасных авиационных бомб — ФАБ-250. С 1942 года на горьковском
            предприятии стали выпускать фугасные снаряды 76-мм, а производство
            боеприпасов 107-мм и 203-мм прекратилось. Заводу потребовалась
            перестройка — станки переоснащали силами самих рабочих.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._2)}>
              <Image src="/images/sormovo/9/4.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._3)}>
            <Image src="/images/sormovo/9/3.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  );
};

export default Ammunition;
