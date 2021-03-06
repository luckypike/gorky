import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, Speech, CommonImage } from '../../../../'

import styles from './Rear.module.css'

const Rear = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="В тылу, как на фронте">
          <p>
            В первые же дни войны более 400 рабочих завода ушли на фронт добровольцами. Еще несколько тысяч рабочих были
            мобилизованы. Военкомат потребовал сдать 180 заводских машин, или 65% автопарка предприятия, на нужды
            фронта. Вмешался секретарь обкома партии — часть призывников вернули из армии на завод, большинство получили
            бронь.
          </p>
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/nmz/12/1.jpg" layout="fill" />

            <figcaption>
              В ходе фашистских налетов «Новое Сормово» ни разу серьезно не пострадало
            </figcaption>
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            Завод перешел на работу в две смены по 12 часов. Только раз в две недели в воскресенье механические цехи
            останавливались для пересмены и профилактики оборудования. Руководящий состав не уходил с завода по 14–18
            часов — в кабинетах у каждого начальника цеха и его замов стояли кровати. На круглосуточное дежурство
            перешел отдел главного энергетика.
          </p>

          <p>
            Быт рабочих был таким же тяжелым, как и работа на заводе. В бараках-общежитиях рабочего поселка им. Калинина
            жили по несколько семей в одной комнате, без удобств и с дырявой крышей (строительство благоустроенных домов
            началось только в 1943 году). Главную ценность представляли продуктовые карточки: по ним сотрудник военного
            предприятия мог получить 800 г хлеба в день. Однако немногим хватало сил после 12-часовой смены отстаивать
            километровые очереди в надежде отоварить продуктовую карточку. В ходе фашистских налетов «Новое Сормово» ни
            разу серьезно не пострадало, хотя территория вокруг него была усыпана воронками снарядов. Завод был
            изначально спроектирован и построен таким образом, что с воздуха выглядел как жилой квартал, на уничтожение
            которого гитлеровцы старались не тратить бомбы.
          </p>

          <p className={styles.vrezka}>
            Завод был изначально спроектирован и построен таким образом, что с воздуха выглядел как жилой квартал
          </p>
        </CommonText>

        <Speech
          title="«Раз в год давали бутылку водки или пачку сигарет»"
          author={{
            name: 'Сотрудник механического цеха № 18 завода № 92 в годы войны А. Коровин:'
          }}
        >
          «В 15 лет я встретил войну. Первый же мой рабочий день на заводе составил 12 часов. Мне сразу же объяснили,
          что опаздывать на работу категорически запрещается, за 20-минутное опоздание будут полгода вычитать 25%
          заработка. Иногда приходилось работать 18 часов подряд. За четыре года у меня было лишь два дня
          выходных-отгулов. Зачастую и отоварить продуктовые карточки было нечем. Еды всегда не хватало, и чувство
          голода преследовало рабочих постоянно. В пищу шли картофельные очистки, крахмал, свекольные листья… Раз в
          год давали бутылку водки или пачку сигарет. Стоимость сорокаградусной бутылки на черном рынке достигала в
          провинции до 1000 рублей — это было больше месячного оклада. За бутылку водки можно было получить две-три
          буханки хлеба…Зима 1942 года была очень суровая, морозы доходили до минус сорока градусов. Бывали случаи
          замерзания насмерть. В этих условиях рабочие не шли домой, а направлялись в горячие цехи и там спали».
        </Speech>
      </div>
    </div>
  )
}

export default Rear
