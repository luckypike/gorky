import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {
  MainText,
  Columns,
  Speech
} from '../../../../'

import styles from './Evacuation.module.css'

const Evacuation = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Эвакуация срывает сроки">
          <p>
            В напряженные месяцы начала войны не все зависело от усилий
            коллектива завода. Многие предприятия Москвы и Ленинграда осенью
            1941 года находились в стадии эвакуации, из-за этого нижегородское
            предприятие не получало радиодетали и готовые изделия, необходимые
            для производства радиостанций. Изготовление дефицитных узлов
            налаживалось своими силами и с помощью ближайших нижегородских
            предприятий. В порядке кооперирования были привлечены
            производственные артели им. 1 Мая, «Деревообработка», «Репродуктор»,
            в состав завода также был включен завод «Красный металлист»
            (оставался филиалом до 1943 года).
          </p>
        </MainText>

        <Columns
          left={
            <div>
              <p>
                В заводском отчете от 29 декабря 1941 года говорится: «Последние
                два месяца завод не получает ни радиоламп, ни кабельных изделий.
                С 15 октября не получает радиоприемники типа УС с завода № 203,
                эти приемники необходимы для комплектации всех радиостанций,
                выпускаемых заводом № 197: армейских радиостанций типа РАФ при
                задании 110 шт. будет сдано лишь 40; дивизионных типа РСБ в
                фургоне при задании 200 шт. будет сдано 131; типа РСБ в ящиках
                при задании 100 шт. будет сдано 74». Осенью 1941 года на заводе
                им. В. И. Ленина были истрачены все ресурсы по радиолампам,
                поставку которых срывали заводы № 211 и № 191. А эвакуированный
                из Ленинграда в Казань завод № 218 не смог поставить
                нижегородскому предприятию ни одного измерительного прибора.
              </p>

              <p>
                Поставки с эвакуированных предприятий наладились лишь к весне
                1942 года. В то же время на заводе № 197 стали применяться
                холодная штамповка и точечная электросварка вместо клепки, что
                увеличивало производительность в 14 раз. Сборка приемников,
                передатчиков и переговорных устройств была переведена на
                конвейер. Себестоимость главнейших изделий снизилась от двух до
                четырех раз.
              </p>
            </div>
          }
          right={
            <div>
              <figure className={classNames(styles.img, styles.main)}>
                <Image src="/images/nitel/7/1.jpg" layout="fill" />
              </figure>
            </div>
          }
        />

        <Speech
          title="«Невозможное стало возможным»"
          author={{
            name:
              'Начальник цеха № 11 завода им. В. И. Ленина в годы войны Д. А. Шорохов: '
          }}
        >
          «В сентябре 1941 года на завод прибыл нарком связи СССР Пересыпкин. Он
          посетил цех № 11 и, ознакомившись с ходом производства, заявил, что
          фронту нужно значительно больше изделий — не десятки, а по крайней
          мере раза в три-четыре больше. Коллектив под руководством группы
          инженерно-технических работников своими силами создал совершенно новое
          изделие. По стоимости оно резко отличалось от старого: на каждом
          изделии предприятие экономило 92000 руб. Вознаграждение за сбереженные
          миллионы рационализаторы передали в Фонд обороны. Так невозможное
          стало возможным».
        </Speech>
      </div>
    </div>
  )
}

export default Evacuation
