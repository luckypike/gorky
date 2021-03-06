import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Speech } from '../../../../'

import styles from './Build.module.css'

const Build = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._3)}>
            <Image src="/images/teploobmennik/5/3.jpg" layout="fill" />

            <figcaption>
              Производственный корпус No 1 был построен за 15 дней
            </figcaption>
          </figure>
        </CommonImage>

        <MainText title="Стройка на пустыре">
          <p>
            Производство эвакуированных предприятий на новом месте часто было
            разрознено. Завод № 469 получил единый участок. Но строительная
            площадка представляла собой пустырь с торфяным болотом. Ни
            производственных корпусов, ни водопровода, ни канализации — не было
            ничего, кроме трех фанерных будок и трех недостроенных зданий.
            Ситуацию осложняли холодная осень и ранняя зима 1941-го — к моменту
            прибытия первых эшелонов в Горьком уже выпал снег, ударили морозы.
          </p>

          <p>
            Людей разместили в доме треста «Стройгаз», бараках в поселках
            Северном и Костариха, в семьях горьковчан. Все сразу выходили на
            работу: строили круглосуточно, жили в строящихся цехах, спали по
            несколько часов. Директор В. Н. Смирнов не отлучался со стройки по
            несколько суток.
          </p>

          <p className={styles.vrezka}>
            Строительная площадка представляла собой пустырь с торфяным болотом.
            Ни производственных корпусов, ни водопровода, ни канализации
          </p>
        </MainText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/teploobmennik/5/1.jpg" layout="fill" />

            <figcaption>
              Для скорейшего запуска производства формально был установлен 12-часовой рабочий день, но в действительности работали круглосуточно
            </figcaption>
          </figure>
        </CommonImage>

        <CommonText>
        <p>
            На стройке остро не хватало людей. Стало известно, что в районе
            Чкаловска во льдах оказался пароход «Академик Бах» с баржей, на
            которых были эвакуированные из Подмосковья.
            Местные власти распорядились, чтобы эти люди были направлены на
            строительные работы в район стройплощадки.
          </p>

          <p>
            Завод одновременно работал и строился. К концу 1941 года были
            введены в эксплуатацию основные пять производственных корпусов и
            смонтировано оборудование. Были построены четыре временных
            деревянных склада, заработали временные помещения пожарного депо,
            гаражные мастерские, проходная, столовая и другие объекты. Проложено
            1,5 км железнодорожных путей, 550 м паропровода и наружный
            водопровод первой очереди.
            Временными котельными на заводе поначалу служили два старых паровоза
            типа «Щ» — капитальная котельная была построена и пущена в
            эксплуатацию только весной 1942 года. Ветеран завода А. А. Елисеев
            вспоминал, что в цехах было холодно — в обед рабочие собирались в
            термичке погреться.
          </p>

          <p>
            Уже 28 ноября 1941 года, на два дня досрочно, была выпущена первая
            партия радиаторов для самолетов. На тот момент из трех радиаторных
            заводов, эвакуированных в Троицк, Горький и Кузнецк, завод № 469
            оказался единственным действующим.
            Параллельно с производством радиаторов для авиапрома завод выпускал
            радиаторы для военных судов, для легких танков Т-60 и Т-70, корпуса
            аэронавигационных бомб (АНАБ).
          </p>
        </CommonText>

        <Speech
          title="«Оборудование уже устанавливали, хотя крыш еще не было»"
          author={{
            name:
              'Нарком авиационной промышленности в годы войны А. И. Шахурин:'
          }}
        >
          <p>
            «Вместе со строителями трудились на площадках рабочие и инженеры
            эвакуированных заводов. Они прокладывали временные железнодорожные
            пути для продвижения эшелонов в цехи и начинали разгружать это
            оборудование. В некоторых корпусах оборудование уже устанавливали,
            хотя крыш еще не было. Работа под открытым небом шла на нескольких
            уровнях. Внизу размещали станки и прокладывали силовой кабель. По
            стенам крепили отопительную арматуру, тянули проводку
            осветительной сети. Вверху сооружали кровлю и сваривали балки.
          </p>

          <p>
            В октябре и ноябре день, как известно, короток. Работать
            становилось все труднее и труднее. На территории освещение слабое.
            Грязь. Холод. К ночи лужицы подергивались льдом. У разведенных тут
            же костров кипятили чай (вернее, шиповник), обогревались и
            строители, и авиационники. Надо сказать, что все кадровые рабочие
            помогали строить и оборудовать свои рабочие места. Приехавшие сюда
            загодя главные инженеры, главные технологи и механики очень точно
            распределили все заранее. Любой начальник цеха тотчас после
            прибытия знал свое место, вместе с рабочими помогал строителям
            поскорее сдать цех».
          </p>
        </Speech>

        <Speech
          title="«Идут сотни людей на заводы»"
          author={{
            name:
              'Нарком авиационной промышленности в годы войны А. И. Шахурин:'
          }}
        >
          «Многие шли на завод из городов и поселков по 12–16 километров. С
          транспортом тяжело. Трамваи часто не ходили, поезда опаздывали: то
          заносы, то пропускали военные эшелоны. И вот в метель и мороз вдоль
          трамвайных линий и насыпей железных дорог идут сотни людей на
          заводы, чтобы дать фронту то, что он требует, сменить товарищей,
          отработать с напряжением 12 часов подряд, а то и дольше. Недоставало
          одежды и обуви. Плохое, если не сказать больше, было питание»
        </Speech>
      </div>
    </div>
  )
}

export default Build
