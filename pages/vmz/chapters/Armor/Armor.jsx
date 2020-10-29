import React from "react";

import {
  MainImage,
  MainText,
  CommonText,
  Gallery,
  Speech,
} from "../../../../components";

import styles from "./Armor.module.css";

const Armor = () => {
  return (
    <div className={styles.root}>
      <MainText title="Оделись в броню">
        30 июня 1941 года в Горький прибыл заместитель председателя Совнаркома
        СССР Вячеслав Малышев. Он поставил перед руководством области задачу в
        кратчайшие сроки развернуть на заводе «Красное Сормово» серийный выпуск
        тяжелых танков Т-34, на Горьковском автозаводе — легких танков Т-60, при
        этом не останавливая выпуск автомобилей
      </MainText>
      {/* <MainImage image={main}/> */}
      <div>
        <CommonText>
          Выксунский металлургический завод должен был столь же быстро наладить
          крупномасштабное производство броневых и других специализированных
          легированных сталей и обеспечить выпуск броневого листа разной
          толщины. Сроки для перестройки производства казались невыполнимо
          сжатыми. В красных уголках и в кабинетах руководителей появились
          койки — ­многие не выходили с завода по несколько суток. График работы
          диктовала фронтовая обстановка, поэтому выксунцам пришлось за
          кратчайшее время выполнить оборонный заказ.
        </CommonText>
        <Speech
          title="«Работать не щадя сил»"
          author={{
            name: "Сталевар ВМЗ в годы войны В. А. Веретенов",
          }}
        >
          «Когда на другой день я пришел за два часа до работы на смену, вся
          бригада была в сборе. Люди немногословны. Решил завалку произвести
          двумя завалочными машинами и на максимальном тепловом режиме. Это
          сразу значительно сократило время. Плавление и полировку также провели
          с опережением графика. И вот выпускаем сталь. Смотрю на лица своих
          товарищей — они сосредоточены, даже суровы. Время работы окончено, но
          домой никто уходить не торопится. Довели разливку до конца. Рядом с
          нами стоит уже давно другая бригада, пришедшая менять нас. И вот по
          цеху объявление: „Первая военная плавка бригады сталевара Веретенова
          выполнена на сто девять целых и одну десятую процента“. Мы отлично
          понимали, что сверхплановая сталь — это дополнительные танки,
          бронемашины. Девизом выксунских металлургов, как и всего советского
          народа, ковавшего трудом победу, стал боевой призыв ленинской партии —
          работать не щадя сил, делать все для фронта, для разгрома врага».
        </Speech>
      </div>
      {/* <Gallery image={main}/> */}
    </div>
  );
};

export default Armor;
