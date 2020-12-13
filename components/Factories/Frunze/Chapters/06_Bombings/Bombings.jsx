import React from "react";
import classNames from "classnames";
import Image from "next/image";

import { MainText, Columns, CommonImage } from "../../../../";

import styles from "./Bombings.module.css";

const Bombings = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Завод во время бомбардировок" />

        <Columns
          left={
            <div>
              <p>
                Первый налет на Горький был совершен вражеской авиацией с 4 на 5
                ноября 1941 года. В нем участвовали группы бомбардировщиков
                He-111 и Ju-88.Сделав несколько кругов над кварталами, один из
                них сбросил бомбу на завод им. Ленина. Взрывная волна была
                настолько сильной, что на заводе им. М. В. Фрунзе вылетели
                стекла. «Эхо взрыва пронеслось по всему Ворошиловскому району
                Горького. На расположенном напротив пострадавшего предприятия
                заводе радиоаппаратуры № 326 им. Фрунзе во всех цехах вылетели
                стекла, осыпалась штукатурка. Многие рабочие в панике побежали к
                проходным, часть людей полезла прямо через высокий заводской
                забор», — пишут авторы книги «Свастика над Волгой: Люфтваффе
                против сталинской ПВО» Д. Дегтев, М. Зефиров и Н. Баженов.
              </p>
            </div>
          }
          right={
            <div>
              <figure className={classNames(styles.img, styles._1)}>
                <Image src="/images/frunze/7/2.jpg" layout="fill" />
              </figure>
            </div>
          }
        />

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/frunze/7/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  );
};

export default Bombings;
