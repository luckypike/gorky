import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {
  MainText,
  Columns,
  CommonImage,
  CommonText,
  Speech,
  GunsOfWar
} from '../../../../'

import styles from './GunsForBattle.module.css'

const GunsForBattle = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Орудия — к бою!">
          <p>
            К октябрю 1941 года с завода ушли на фронт более 3500 рабочих, ИТР и
            служащих. В первые месяцы войны завод «Красная Этна» перешел на
            выпуск продукции для фронта: 50-мм и 82-мм мин, взрывателей к 76-мм
            снарядам и других элементов боеприпасов для авиации, артиллерии и
            морских торпед, запальных трубок Норденфельда. Также в цехах
            предприятия собирали 50-мм минометы и пистолеты-пулеметы Шпагина
            (ППШ).
          </p>
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/etna/4/1.jpg" layout="fill" />
            <figcaption>
              В начале войны на 50-мм минометы приходилась половина минометного
              парка Красной Армии
            </figcaption>
          </figure>
        </CommonImage>

        <Columns
          left={
            <figure className={classNames(styles.img, styles._2)}>
              <Image src="/images/etna/4/3.jpg" layout="fill" />
            </figure>
          }
          right={
            <div>
              <p>
                По объемам производства мин завод был одним из крупнейших в
                стране. Ветераны вспоминали, что ежедневно в Дзержинск на
                зарядку отправлялось до двух железнодорожных составов с
                корпусами мин, «стаканчиками» для снарядов к «Катюшам»,
                взрывателями. При этом производственные планы по боеприпасам
                удавалось выполнять буквально с боем. Так, в феврале 1943 года
                директор «Красной Этны» А. И. Романов писал лично заместителю
                председателя Совнаркома СССР Л. П. Берии об „исключительно
                напряженном положении“ с поставками литья для выпуска авиабомб и
                просил повлиять на крупнейших поставщиков — ГАЗ и завод им.
                Сталина (современный Нижегородский машиностроительный завод). А
                вот в сборке 50-мм минометов, которая началась в октябре 1941
                года, завод «Красная Этна» демонстрировал перевыполнение планов:
                в апреле 1942 года в руководстве наркомата среднего
                машиностроения обсуждали увеличение поставок предприятию вьюков
                (они используются для переноски минометов). Также инженеры
                «Красной Этны» стремились усовершенствовать конструкцию миномета
                и предложили свою упрощенную модель прицела, которую могли бы
                изготавливать «мало-мальски приспособленные механические
                мастерские».
              </p>
            </div>
          }
        />

        <CommonText>
          <p></p>

          <p className={styles.vrezka}>
            За годы войны завод «Красная Этна» освоил почти 3000 новых изделий
            по своему основному профилю и по другим заказам для фронта
          </p>
        </CommonText>

        <GunsOfWar img="/images/etna/4/gun.jpg" title="50-мм ротный миномет">
          <p>
            Разработка миномета началась в 1936 году, первый образец появился в
            1938 году. Конструкция позволяла фиксировать ствол в двух
            положениях: с наклоном 45 градусов при стрельбе на максимальную
            дальность и 75 градусов — на минимальную. Для стрельбы на
            промежуточные дистанции миномет имел специальный кран,
            регулировавший выпуск пороховых газов из ствола. В модификации 1940
            года конструкция дистанционного крана и лафета упростилась.
          </p>
          <p>
            К началу Великой Отечественной войны на вооружении Красной Армии
            состояло более 36 тыс. минометов 50-мм 1938–1940 гг., что составляло
            половину всего минометного парка. В 1941 году конструкторы
            спроектировали еще одну модель 50-мм миномета — по так называемой
            «глухой» схеме, когда все механизмы и элементы смонтированы на
            опорной плите. РМ-41 образца 1941 года стал основным ротным
            минометом советских войск: в годы войны было выпущено более 130 тыс.
            50-мм минометов. Масса РМ-41 в боевом положении — около 10 кг.
            Скорострельность — 30 выстрелов в минуту. Дальность стрельбы —
            60–800 м в зависимости от угла наклона. Боеприпасы — осколочные
            стальные шестиперые мины весом 922 г и осколочные чугунные
            четырехперые мины весом 908 г. Снят с вооружения в 1943 году. Бойцы
            говорили, что если в обороне 50-мм миномет еще был способен отражать
            атаки противника, то в наступательном бою оказался почти бесполезен
            из-за малой дистанции стрельбы, сложностей с маскировкой и доставкой
            боеприпасов (минометчики, как правило, находились на переднем крае)
            и как следствие — потерь личного состава.
          </p>
        </GunsOfWar>
      </div>

      {/* <div className={styles.page}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/etna/4/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div> */}

      <div className={styles.page}>
        <Speech
          title="«Работали с задором»"
          author={{
            name:
              'Ветеран труда, в годы войны мастер цеха холодного проката ленты Е. А. Бакаев'
          }}
        >
          «Работали, не давая себе ни минуты отдыха. Часто смена длилась 13–14
          часов. Праздники, выходные были понятием относительным. Но никто не
          жаловался. Понимали — надо. Фронт ждет оружие. Наоборот, работали с
          задором. Задания всегда выполнялись в срок, а часто и раньше. Со
          временем не считались».
        </Speech>
      </div>
    </div>
  )
}

export default GunsForBattle
