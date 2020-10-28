import React from "react";

import {
  MainImage,
  MainText,
  CommonText,
  Gallery,
} from "../../../../components";

// import main from '../../assets/sormovo/one/main.jpg'
import styles from "./OldestPlant.module.css";

const OldestPlant = () => {
  return (
    <div className={styles.root}>
      <MainText title="Старейший завод">
        «Красное Сормово» — одно из старейших предприятий не только в Нижнем
        Новгороде, но и в России: завод основан в 1849 году. Почти половина
        российских речных пароходов строилась именно здесь.
      </MainText>
      {/* <MainImage image={main}/> */}
      <div>
        <CommonText>
          На заводе запустили первую в России мартеновскую печь в 1870 году,
          сормовскую сталь отмечали высокими наградами, предприятие активно
          развивалось. Первые военные заказы сормовский завод получил в годы
          Крымской войны: это были суда для Каспийской флотилии и чугунные ядра
          для обороны Севастополя.
          национализировали.
        </CommonText>
        <CommonText>
          В начале ХХ века сормовичи спускали на воду канонерские лодки для реки
          Амур, построили мощную паровую машину для крейсера «Очаков». Крупные
          военные заказы предприятие стало получать с 1914 года. К этому времени
          завод произвел свыше 2 тыс. паровозов, 60 тыс. единиц подвижного
          состава и другой продукции тяжелого машиностроения. Накануне Первой
          мировой войны завод освоил производство бомб и снарядов. Постепенно
          сормовичи стали выпускать пушки, повозки для ружейных стволов,
          бронированные зарядные ящики, фугасные снаряды, шрапнели, бомбы,
          патронные двуколки. В те годы на предприятии главным стало
          производство военного снаряжения и вооружения, судостроение почти
          прекратилось. В 1918 году завод национализировали.
        </CommonText>
      </div>
      {/* <Gallery image={main}/> */}
      <CommonText>
        В гражданскую войну завод стал одевать поезда в броню. В 1920 году
        «Красное Сормово» выпустило первый советский танк «Борец за свободу
        товарищ Ленин», ставший первым отечественным серийным танком.
        В дальнейшем эти танки называли «Русский Рено» — они были собраны по
        образцу французского танка Renault, захваченного кавалеристами 2-й
        Украинской Советской армии в бою с белогвардейцами, или Т-КС — по первым
        буквам названия завода. К 1930 году предприятие выпускало три типа
        паровозов, четыре типа дизелей, 18 паровых машин, четыре типа вагонов.
        Осваивалось производство машин, станков и оборудования. В 1939 году за
        заслуги в судостроении и машиностроении завод «Красное Сормово» был
        удостоен ордена Трудового Красного Знамени.
      </CommonText>
    </div>
  );
};

export default OldestPlant;
