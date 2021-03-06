import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainImage, MainText, CommonText, CommonImage, Speech, Columns } from '../../../../'

import styles from './New.module.css'

const New = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainImage>
          <figure className={classNames(styles.img, styles.intro)}>
            <Image src="/images/gidroagregat/img.jpg" layout="fill" />

            <figcaption>
              К 1940 году на территории завода был готов только один корпус — остальные строились
            </figcaption>
          </figure>
        </MainImage>

        <MainText title="«Новый» завод">
          <p>
            История завода № 467 началась в октябре 1940 года, когда Наркомату
            авиационной промышленности было передано недостроенное предприятие в
            городе Павлово Горьковской области.
            В городе были сосредоточены лучшие в области металлообрабатывающие
            артели, известные ювелирным подходом к изготовлению инструмента,
            оружия и замков. И в 1936 году трест «Росинструмент» запланировал
            здесь строительство еще одного такого же производства —
            металлических изделий бытового назначения.
          </p>
        </MainText>

        <Columns
          left={(
          <figure className={classNames(styles.img, styles.main)}>
              <Image src="/images/gidroagregat/3/2.jpg" layout="fill" />
            </figure>
          )}

          right={(
            <div>
              <p>
                Ветераны той стройки вспоминали, что большую роль в судьбе
                предприятия сыграл А. И. Шахурин, побывавший на площадке в должности
                секретаря Горьковского обкома ВКП (б) в январе 1939 года. Через год
                он был назначен народным комиссаром авиационной промышленности СССР
                и, очевидно, инициировал передачу новостройки в свою отрасль. К тому
                моменту на территории нового завода полностью был готов только один
                корпус, и тот необходимо было реконструировать под новое
                производство, еще несколько цехов только завели под крышу, зато
                стройка была обеспечена коммуникациями.
                Сроки окончания работ были довольно жесткими: приказом наркома
                авиапрома №702 от 9 декабря 1940 года заводу был определен объект
                производства — воздушный винт изменяемого шага — с выпуском готовой
                продукции в третьем квартале 1941 года. Руководству завода
                (директором предприятия был А. И. Бухтин) предстояло менее чем за
                год достроить завод, наладить производство, набрать
                квалифицированных специалистов и поставить на поток выпуск важнейших
                комплектующих для самолетов.
              </p>
            </div>
          )}
        />

        <CommonImage content>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/gidroagregat/3/1.jpg" layout="fill" />

            <figcaption>
              На стройку и пуск производства руководству завода № 467 давали меньше года
            </figcaption>
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            В сроки не укладывались. Началась война. В третьем квартале
            строительная программа была выполнена только на треть — не хватало
            рабочих, люди уходили на фронт и направлялись на строительство
            оборонительного рубежа. Оснащение завода станками и инструментами
            тоже шло медленно. На 1941 год заводу полагалось 550 единиц
            оборудования, однако в первом и втором кварталах предприятие не
            получило ничего, а к июлю — только первые 18 металлорежущих станков.
            Эшелоны с оборудованием прибывали и по железной дороге, и по Оке.
            Вместе со станками из Москвы и Ступино в Павлово приезжали и первые
            специалисты.
          </p>

          <p>
            Интенсивно готовились собственные кадры. Группа
            павловчан-металлистов была отправлена перенимать опыт в Ступино.
            Специально для нового завода обучал выпускников Павловский
            индустриальный техникум. Наиболее квалифицированные токари,
            фрезеровщики, кузнецы с других предприятий тоже направлялись на
            новый завод (долгое время завод № 467 знали в Павлово именно как
            «новый», так и называли его).
          </p>
        </CommonText>

        <Speech
          title="«Нас ждал завод»"
          author={{
            name: 'Ветеран завода № 467 Н. В. Корчагина'
          }}
        >
          «Занимались мы с ребятами в нетопленых классах училища. Было
          холодно, недоедали. Но было у нас большое желание быстрее научиться
          работать самостоятельно. Нас ждал завод. Занимались по четыре часа в
          день, затем четыре часа работали на заводе вместе со взрослыми.
          Старались перенять их опыт. Но самое главное — старались не отстать,
          выдержать смену. А мне тогда было всего 13 лет. После работы мы с
          подружками возвращались домой усталыми, но гордыми и счастливыми:
          сменное задание выполнили!».
        </Speech>

        <Speech
          title="«На помощь местным строителям были привезены туркмены» "
          author={{
            name:
              'Начальник отдела капитального строительства завода в 1939 году В. И. Алексеев'
          }}
        >
          «К моменту передачи завода из системы треста „Росинструмент“ на
          новой территории полностью был готов только кузнечно-штамповочный
          корпус, в нем уже стояли прессы и молоты, которые в начале войны
          пришлось демонтировать и передать павловским заводам, так как новому
          заводу нужны были всего два молота. Почти построены были
          инструментальный цех, два механических, подведен водопровод,
          сооружена водонапорная башня, трансформаторная подстанция. Во время
          войны продолжалось возведение цехов, на помощь местным строителям
          были привезены туркмены, ставшие разнорабочими, подсобниками. После
          пуска цехов они были разнорабочими на производстве. С июля 1941 года
          начался монтаж оборудования (без особого предварительного плана),
          привезенного из Москвы и Московской области».
        </Speech>
      </div>
    </div>
  )
}

export default New
