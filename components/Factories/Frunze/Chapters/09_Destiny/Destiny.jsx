import React from "react";
import classNames from "classnames";
import Image from "next/image";

import { MainText, Columns, CommonImage } from "../../../../";

import styles from "./Destiny.module.css";

const Destiny = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Послевоенная судьба">
          <p>
            Через год после победы на заводе на базе отдела главного
            конструктора и инженерно-технического персонала цеховых лабораторий
            было создано Центральное конструкторское бюро (ЦКБ-326). Затем на
            базе ЦКБ-326 образован Научно-исследовательский институт №11 (ННИПИ
            «Кварц»).
          </p>
        </MainText>

        <Columns
          left={
            <div>
              <figure className={classNames(styles.img, styles.main)}>
                <Image src="/images/frunze/10/1.jpg" layout="fill" />
              </figure>
            </div>
          }
          right={
            <div>
              <p>
                В 1945 году завод принял часть оборудования по производству
                радиоламп и радиоальтиметров с австрийского предприятия фирмы
                «Кремзеверке». С конца 1940-х годов выпуск измерительной
                аппаратуры стал основным направлением производства для завода
                им. М. В. Фрунзе. Это определило дальнейшую судьбу предприятия,
                который стал специализироваться на таких сложных изделиях, как
                генераторы высокой и сверхвысокой частоты, измерители модуляции,
                мощности, индуктивности, емкости.
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Destiny;
