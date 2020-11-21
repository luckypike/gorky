import React from "react";
import classNames from "classnames";
import Image from "next/image";

import {
  MainText,
  CommonText,
  Speech,
  CommonImage,
} from "../../../../components";

import styles from "./LocomotiveOfVictory.module.css";

const LocomotiveOfVictory = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="31­й особый: локомотив победы">
          <p>
            Самоотверженно сражались с противником и совершили много боевых
            подвигов бронепоезда «Козьма Минин» и «Илья Муромец», построенные
            при поддержке трудящихся Горьковской области. В составе 31-го
            особого дивизиона они принимали участие в сражениях под Москвой,
            Брянском, Орлом, Жлобином, Ковелем, Варшавой и дошли до
            Франкфуртана-Одере.
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/gzhd/7/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Экипажи их состояли в основном из работников местного
            железнодорожного узла. Дивизион бронепоездов был сформирован в
            Горьком 21 февраля 1942 года. Он назывался «особый» из-за реактивной
            артиллерии, которую получил на вооружение первым в мире. Это были
            пусковые установки для реактивных снарядов М-8-24 «Катюша». За время
            боев дивизион прошел путь длиною 2400 км. Он нанес более 150 мощных
            огневых ударов по обороне противника. «Илья Муромец» в 1944 году
            выиг рал поединок с немецким бронепоездом.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/gzhd/7/1.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <Speech
            title="«Страшное было оружие»"
            author={{
              name: "Машинист «Козьмы Минина» в годы войны И. Удодов",
            }}
          >
            «Двигались мы так: паровоз всегда не в начале, а в середине поезда,
            рядом — вагон для экипажа. В голове и в хвосте — контрольные
            площадки, то есть пустые платформы. Если путь минирован, они взлетят
            на воздух, а все остальное уцелеет. Дальше — вагоны с орудиями, с
            „Катюшами“… Страшное было оружие! Как немец долго сидит в обороне —
            нам команда: подгонять поезд к самому фронту… И в середине ночи
            „Катюшам“ команда — огонь! … Вой, грохот, земля дрожит, и прямо от
            нас видно — вся линия обороны у немцев к черту смята».
          </Speech>

          <p className={styles.vrezka}>
            Бронепоезда получили имена великого патриота Козьмы Минина и
            былинного богатыря Ильи Муромца. Бойцы Красной Армии их тут же стали
            ласково называть «Кузя» и «Илья»
          </p>
        </CommonText>
      </div>
    </div>
  );
};

export default LocomotiveOfVictory;
