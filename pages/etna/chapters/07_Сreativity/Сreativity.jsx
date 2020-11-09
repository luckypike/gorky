import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {
  MainText,
  CommonText,
  CommonImage,
  Speech
} from '../../../../components'

import styles from './Сreativity.module.css'

const Сreativity = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Творчество как спасение">
          По воспоминаниям ветеранов завода, первый военный год оказался более
          голодным и холодным, чем все последующие. Цены резко повысились, хотя
          зарплата оставалась на прежнем уровне
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/etna/7/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Буханка хлеба на черном рынке стоила 200 руб. при зарплате
            заводского бухгалтера 500 руб. Почти все горьковчане в выходные
            ездили по окрестным деревням в надежде обменять свои вещи на
            картошку. Красноэтновцы для этого покупали выпущенные в цехе
            ширпотреба противни, чугунные сковородки и котелки.
          </p>
          <p>
            Весной 1942 года рабочим «Красной Этны» выделили земли под огороды
            между Березовским и Сортировочным поселками, и осенью картошка и
            другие овощи были уже свои. Сами добывали и дефицитное топливо:
            летом 1942 года заводчанам нарезали делянки для добычи торфа на
            болотах за поселком Орловские дворики.
          </p>
          <p>
            Несмотря на голод и нищету, жили активно, творчески и неравнодушно
            ко всем инициативам. Заводчане стояли в очередях, чтобы сдать
            довоенные облигации в фонд обороны. Собирали средства на постройку
            танковых колонн, эскадрилий самолетов. А в январе 1943 года
            коллектив «Красной Этны» решил построить танковую колонну
            «Красноэтновец». Только в первые два дня было собрано 725 тыс. руб.,
            а всего — более 2,5 млн руб. В феврале 1943 года в адрес коллектива
            предприятия пришла правительственная телеграмма: «Прошу передать
            рабочим, работницам, инженерно-техническим работникам и служащим
            Горьковского завода „Красная Этна“, собравшим 725 000 рублей на
            постройку танковой колонны „Красноэтновец“, — мой братский привет и
            благодарность Красной Армии. И. Сталин».
          </p>
        </CommonText>
      </div>

      <div className={styles.page}>
        <Speech
          title="«Женя Евстигнеев был у нас постоянным конферансье»"
          author={{
            name: 'Ветеран завода Г. И. Тихомирова'
          }}
        >
          «Коллектив у нас был очень дружный, хотя уставали, недоедали, но
          находили время давать концерты в госпитале. Я была солисткой, Фрида
          Мер аккомпанировала на гитаре или аккордеоне, а Женя Евстигнеев был у
          нас постоянным конферансье. Выступали мы с концертами и в своей
          лаборатории. Раненым в госпитале помогали, чем могли: писали под
          диктовку письма их близким, делали подарки к праздникам — шили кисеты,
          носовые платки».
        </Speech>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/etna/7/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Широко развернулось на предприятии донорское движение. Более 20 раз
            в годы войны сдавали кровь Л. Г. Прункова, Т. Е. Тяпаева, Л. П.
            Гусева, А. И. Курышева, А. И. Премудрова и многие другие. 27
            сентября 1941 года заводская многотиражка «Искра» писала: «…На
            заводе много доноров, все готовы в любую минуту отдать свою кровь.
            Среди них и молодые девушки, и пожилые женщины, комсомолки и
            беспартийные. Большинство из них уже отдали свою кровь бесплатно в
            фонд обороны Родины».
          </p>
          <p>
            В годы войны за предприятиями закреплялось шефство над госпиталями.
            Завод «Красная Этна» был шефом госпиталя № 2805, который размещался
            в школе № 123. Комсомольцы завода проводили лекции и беседы для
            раненых, читали в палатах газеты, организовывали показ фильмов.
            Часто устраивали вечера самодеятельности, собирали подарки для
            фронтовиков, находившихся на лечении. Среди таких комсомольцев был
            Евгений Евстигнеев — будущий народный артист СССР, работавший тогда
            слесарем центральной заводской лаборатории.
          </p>
          <p className={styles.vrezka}>
            На постройку собственной танковой колонны «Красноэтновец» заводчане
            собрали 2,5 млн руб. и получили в телеграмме личную благодарность И.
            Сталина
          </p>
        </CommonText>
      </div>
    </div>
  )
}

export default Сreativity
