import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {
  MainText,
  CommonText,
  CommonImage,
  CommonImages,
  Speech,
  Legend
} from '../../../../'

import styles from './Powerful.module.css'

const Powerful = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Мощный и живучий">
          <p>
            В первые дни войны новые истребители ЛаГГ-3 оказались далеко от
            западных границ и присоединиться к обороне страны смогли только в
            июле. 13 июля летчик 24-го истребительного авиационного полка (ИАП)
            А.В. Бондаренко на ЛаГГ-3 над Смоленской областью уничтожил немецкий
            бомбардировщик Do-17. В августе-сентябре ЛаГГи уже воевали на всех
            фронтах: при воздушной обороне во время фашистского наступления на
            Москву, на защите стратегических объектов пригодились живучесть и
            мощное вооружение ЛаГГов.
          </p>
        </MainText>
      </div>

      <div className={styles.page}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/sokol/9/4.jpg" layout="fill" />

            <figcaption>Летчик А. М. Кулагин возле своего ЛаГГ-3 66-й серии. 1944 год</figcaption>
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            Среди прославленных летчиков-истребителей, летавших на ЛаГГ-3, — Н.
            М.Скоморохов из 164-го авиаполка, сбивший 46 самолетов лично и
            восемь в группе, А.В. Алелюхин из 69-го ИАП, одержавший 40 личных
            побед и 17 — в группе, А. М. Кулагин из 821-го авиаполка с 26
            личными победами на ЛаГГе. Три звена ЛаГГов 160-го полка
            обеспечивали перелет в осажденный Ленинград Г. К. Жукова. В августе
            1941 года на ЛаГГ-3 летчики 17-го ИАП прикрывали днепровские
            переправы в районе Кременчуга. Победы давались летчикам нелегко: из
            боевых частей на завод постоянно докладывали о многочисленных
            недостатках самолета, в том числе о внезапных срывах в штопор.
          </p>
        </CommonText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/sokol/9/3.jpg" layout="fill" />

            <figcaption>
              Прославленный летчик-истребитель Н. М. Скоморохов, в начале войны летавший на ЛаГГ-3
            </figcaption>
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            По требованиям военных самолет оснащали сбрасываемыми топливными
            баками для сопровождения штурмовиков и бомбардировщиков, лыжами для
            эксплуатации зимой, дополнительными реактивными снарядами под
            крылом. Все это снижало скорость и скороподъемность истребителя. Но,
            хотя по боевым качествам ЛаГГ-3 уступал основному истребителю
            Люфтваффе 1941 года — Messerschmitt Bf-109F-2, среди преимуществ
            историки называют огневую мощь истребителя, справлявшуюся с сильной
            броней вражеских самолетов, малую горючесть самолета при поражении
            огнем противника.
          </p>
        </CommonText>

        <CommonImages>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/sokol/9/1.jpg" layout="fill" />

            <figcaption>
              ЛаГГ-3 выруливает на взлет
            </figcaption>
          </figure>

          <figure className={classNames(styles.img, styles._3)}>
            <Image src="/images/sokol/9/2.jpg" layout="fill" />

            <figcaption>
              ЛаГГ-3 с подвешенными неуправляемыми реактивными снарядами РС-82
            </figcaption>
          </figure>
        </CommonImages>

        <Speech
          title="«Самолет иногда вел себя, как норовистый конь»"
          author={{
            name: 'Нарком авиапрома в годы войны А. И. Шахурин'
          }}
        >
          <p>
            «Летчики считали ЛаГГ-3 недостаточно устойчивым. По их образному
            выражению, самолет иногда вел себя, как норовистый конь.
            Случалось, машина, словно влекомая неведомой силой, вдруг круто
            увеличивала угол атаки. Подъемная сила крыла падала, самолет
            начинал плохо слушаться летчика. В других случаях самолеты,
            стоявшие на фронтовых аэродромах, неожиданно „подгибали ноги“.
            Что-то происходило с шасси. Приходит утром летчик к машине, а она
            „на коленях“. До войны эти и другие недостатки у ЛаГГ-3 не
            отмечались. Массовое производство, усиленная эксплуатация
            самолетов, а также воздушные бои выявляли неизвестные ранее
            конструктивные и технологические недоработки. Все они быстро
            устранялись».
          </p>
        </Speech>

        <Legend title="Незаслуженные оценки ">
          <p>
            Во многих современных публикациях ЛаГГи получили дурную славу.
            Чего стоит приписываемая летчикам военного времени расшифровка:
            «Лакированный Гарантированный Гроб». Исследователи В. Алексеенко и
            М. Никольский отмечают, что истребитель совсем не заслужил такой
            оценки. Да, он был тяжел, вялый в маневре, но в умелых руках
            вполне мог потягаться с любым противником: 3 февраля 1942 года А.
            А. Губанов на ЛаГГ-3 в одном бою сбил три Bf-109; 21 марта 1942
            года в районе Ржева пятерка ЛаГГов приняла бой с 30 самолетами
            Люфтваффе, наши истребители сбили пять немецких машин без потерь
            со своей стороны. Ас Люфтваффе Герхард Баркхорн вспоминал, что в
            1942 году на Сталинградском фронте он «крутил карусель» с
            одиночным ЛаГГом в течение 40 минут, противники оказались достойны
            друг друга — ни один самолет не был сбит.
          </p>

          <p>
            Так что при всех недостатках ЛаГГ был вовсе не безнадежным
            самолетом и далеко не самым легким противником для пилотов
            Люфтваффе.
          </p>
        </Legend>
      </div>
    </div>
  )
}

export default Powerful
