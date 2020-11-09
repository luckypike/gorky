import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {
  MainText,
  CommonText,
  CommonImage,
  Speech
} from '../../../../components'

import styles from './MachinesAndPeople.module.css'

const MachinesAndPeople = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Станки и люди">
          Кроме предприятий мотопрома завод «Красная Этна» также принял в своих
          цехах завод им. Ф. Энгельса по производству сельхозтехники из
          Запорожья и шурупное производство завода им. III Интернационала из
          белорусского города Речица.
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/etna/6/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Украинское оборудование стало хорошим подспорьем для производства
            боеприпасов на «Красной Этне». В июле 1941 года заводу было поручено
            начать выпуск взрывателей к 76-мм артиллерийским снарядам. Для этого
            предприятие запросило у наркома среднего машиностроения 125 единиц
            оборудования, но было выделено лишь семь — остальное предлагалось
            «изыскать на месте». Резервов у «Красной Этны» не было, зато
            прибывший из Запорожья завод им. Энгельса как раз специализировался
            на изготовлении артиллерийских взрывателей. На базе эвакуированного
            предприятия был создан цех № 5, где впоследствии выпускали также
            донные взрыватели для снарядов морской артиллерии и запальные трубки
            Норденфельда.
          </p>
          <p>
            Эвакуированные предприятия укрепили «Красную Этну» кадрами. Из
            Ленинграда в Горький прибыли 495 человек, из Харькова — 146, из
            Запорожья и Белоруссии — чуть больше сотни. В сумме — около 8% от
            численности персонала «Красной Этны».
          </p>
          <p>
            Среди приезжих было много инженерно-технических работников, без
            которых развитие многих новых для предприятия производств с нуля
            было бы невозможным.
          </p>
        </CommonText>
      </div>

      <div className={styles.page}>
        <Speech
          title="«Поработать круглосуточно и иногда поспать в цехе»"
          author={{
            name: 'Механик на «Красной Этне» в годы войны И. Г. Мучицин'
          }}
        >
          «Монтаж цеха № 5 был поручен И. А Ваплюшкину. Он ввел меня в курс
          работ, передал необходимую документацию, показал на солдатскую койку с
          соломенным матрацем, сказав, что пока не смонтируем все оборудование
          за 10–12 дней, придется поработать круглосуточно и иногда поспать в
          цехе. При разгрузке оборудование, инструменты, материалы из вагонов и
          с платформ направлялись сразу в цех — тяжелое оборудование ставилось
          на фундаменты и крепилось на растворе, а мелкие станки ставились на
          тех рамах, на которых пришли. Все разводки — кабель, электроснабжение,
          вода, сжатый воздух — проводились поверху, крепились на тросах и
          подвесках, чтобы не тратить время на прокладку траншей в полу… Через
          две недели цех взрывателей стал давать продукцию».
        </Speech>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/etna/6/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Проблема рабочих кадров решалась за счет домохозяек, жен
            красноармейцев, подростков. На производстве были организованы школы
            техобучения для новичков. Так, осенью 1941 года на заседании
            парткома завода начальник отдела кадров Гордеев докладывал, что в
            цехе №4 была организована такая школа для 37 домохозяек, которые
            после обучения стали выполнять производственные нормы на 240%.
          </p>
          <p>
            Уже в первые месяцы войны на заводе развернулось движение
            двухсотников: если в июне 1941 года их было 100 человек, то в
            октябре — уже 250. 262 фронтовые бригады объединили около 1 тыс.
            рабочих.
          </p>
          <p>
            28 октября 1944 года завод был награжден орденом Ленина за
            самоотверженный труд в годы Великой Отечественной войны и
            бесперебойное снабжение фронта боеприпасами. ­Более 3 тыс.
            сотрудников предприятия награждены орденами и медалями, в том числе
            директор А. И. Романов был удостоен орденов Ленина и Трудового
            Красного Знамени, главный инженер И. Ф. Синицын — орденов Трудового
            Красного Знамени и Красной Звезды.
          </p>
        </CommonText>
      </div>

      <div className={styles.page}>
        <Speech
          title="«Входишь в цех днем, а там тьма кромешная»"
          author={{
            name: 'Ветеран завода, директор музея «Красной Этны» Г. С. Тилунас'
          }}
        >
          «В первый военный год я окончила шестой класс, и мама скрепя сердце
          решила устроить меня на работу. Она работала в бухгалтерии и
          договорилась с главным бухгалтером Б. Д. Быстрицким, что он возьмет
          меня рассыльной. Но именно в это время пришел приказ из наркомата,
          запрещавший брать на работу детей младше 14 лет. А мне до этого
          возраста не хватало целых полгода. Быстрицкий употребил все свое
          влияние, чтобы меня приняли. С первых дней октября я уже разносила
          документы руководителям цехов и в цеховые бухгалтерии. Что представлял
          из себя в то время завод? Заводские подразделения имели хорошую
          светомаскировку. Потолочные фонари были выкрашены в черный цвет, так
          же, как и оконные проемы. Лишь нижняя часть занавешивалась толем,
          который днем скатывали в рулон и подвешивали с помощью специального
          приспособления. Общее освещение не использовалось. Горели только
          лампочки на каждом рабочем месте. Входишь в цех днем, а там тьма
          кромешная... Вспоминаются дни, когда на город сыпались бомбы. Чаще
          всего нас бомбили по ночам, хотя иногда и днем фашисты не давали
          покоя. Ночные бомбежки начинались с развешивания по небу «фонариков»:
          сбрасывались осветительные ракеты на парашютах, и сразу становилось
          светло, как днем. Первое время люди прятались в укрытия. Потом, когда
          к бомбежкам попривыкли, с рабочих мест никто уже не уходил. На заводе
          и в поселках были организованы дружины. Дружинники не прятались
          никогда. Как только начиналась бомбежка, они хватали специально
          сделанные клещи и забирались на крыши цехов и жилых домов. Мне тоже
          „посчастливилось“ схватить одну „зажигалку“ на крыше дома»
        </Speech>
      </div>
    </div>
  )
}

export default MachinesAndPeople
