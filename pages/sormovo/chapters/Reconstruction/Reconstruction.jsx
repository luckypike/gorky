import React from "react";

import {
  MainImage,
  MainText,
  CommonText,
  Gallery,
  Speech,
} from "../../../../components";

import styles from "./Reconstruction.module.css";

const Reconstruction = () => {
  return (
    <div className={styles.root}>
      <MainText title="Перестройка производства">
        Первое постановление Государственного комитета обороны СССР от 1 июля
        1941 года обязывало «Красное Сормово» наладить выпуск танков Т-34.
      </MainText>
      {/* <MainImage image={main}/> */}
      <CommonText>
        Сначала из-за нехватки дизельных моторов В-2 в танки устанавливали
        адаптированную версию авиационного мотора М-17, производство которого с
        началом войны наладили на Горьковском автозаводе. Детали для танков
        выпускали и другие нижегородские предприятия — «Красная Этна», ГАЗ,
        ЗАТИ, «Двигатель Революции», «Гудок Октября», Горьковский завод
        фрезерных станков и другие. <br /> Танк Т-34 разработали конструкторы
        танкового отдела харьковского завода № 183 под руководством Михаила
        Кошкина. Его серийное производство началось в 1940 году. В 1941 году
        предполагалось, что производить Т-34 будут харьковский завод № 183 и
        Сталинградский тракторный завод. Однако с началом войны производство
        пришлось наладить на «Красном Сормове». Горьковчан направили в Харьков
        на обучение. Специалистов завода № 183 командировали на «Красное
        Сормово», чтобы помочь наладить производство.
      </CommonText>
      {/* <Gallery image={main}/> */}
      <CommonText>
        Переориентация судостроительного завода на танкостроение шла сложно.
        Нужно было варить и катать сталь марки, которую раньше завод не
        производил. Усложнялась технология производства деталей, росло их
        количество. Кроме того, необходимо было изменить конструкцию танка Т-34
        и приспособить ее под установку бензинового двигателя М-17. Чтобы
        организовать производство Т-34, завод начал реконструкцию. В
        эксплуатацию ввели более 26 тыс. кв. м производственных площадей и
        смонтировали около 600 станков.
      </CommonText>
      <div>
        <Speech
          title="«Т-34 стал сенсацией»"
          author={{ name: "Немецкий генерал Э. Шнейдер" }}
        >
          «Танк Т-34 произвел сенсацию. Этот 26-тонный русский танк был вооружен
          76,2-мм пушкой, снаряды которой пробивали броню немецких танков с
          1,5–2 тысяч метров, тогда как немецкие … не более чем с 500 метров, и
          то лишь в том случае, если снаряды попадали в бортовую или кормовую
          часть танка Т-34».
        </Speech>
        <Speech
          title="«Помощь пришла вовремя»"
          author={{ name: "Маршал Советского Союза Г. К. Жуков" }}
        >
          «В октябре 1941 года, когда мне была поручена операция по обороне
          Москвы, мы начали получать с сормовского завода танки Т-34. Эта помощь
          пришла вовремя и сыграла большую роль в битве за Москву».
        </Speech>
      </div>
    </div>
  );
};

export default Reconstruction;
