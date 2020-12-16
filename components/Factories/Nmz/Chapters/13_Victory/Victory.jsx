import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, Speech, CommonImages } from '../../../../'

import styles from './Victory.module.css'

const Victory = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Победные залпы">
          <p>
            В ночь на 9 мая 1945 года по радио было объявлено об окончательном разгроме немецких войск и окончании
            войны. День был объявлен выходным. Но, несмотря на это, сотрудники завода пришли на свои рабочие места. У
            многих на глазах были слезы радости, в цехах царило всеобщее ликование.
            Накануне была изготовлена стотысячная пушка ЗИС-3. Ее установят на постамент в центре завода в напоминание о
            самоотверженной работе тех, кто сражался за победу в тылу.
          </p>

          <p>
            За годы войны горьковский завод № 92 выпустил почти четверть всей артиллерии, произведенной всеми
            артиллерийскими заводами СССР, — это больше, чем фашистская Германия со всеми оккупированными странами
            Европы. Заводу 33 раза присуждалось переходящее Красное знамя ГКО, а в мае 1946 года оно было вручено заводу
            на вечное хранение.
          </p>
        </MainText>

        <CommonImages>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/nmz/13/1.jpg" layout="fill" />

            <figcaption>
              Митинг рабочих завода им. Сталина в честь выпуска стотысячной пушки. 1945 год
            </figcaption>
          </figure>

          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/nmz/13/2.jpg" layout="fill" />

            <figcaption>
            Заводчане слушают обращение ЦК ВКП(б) к избирателям. 1946 год
            </figcaption>
          </figure>
        </CommonImages>

        <CommonText>
          <p>
            После войны «Новое Сормово» разрабатывало атомные установки различной мощности для военно-морского флота.
            Например, завод поставлял реакторное оборудование для первой атомной подводной лодки «Ленинский комсомол».
            Расширялась номенклатура изделий гражданского назначения: было освоено производство нефтяного,
            энергетического оборудования, широкого ассортимента насосов, запорной арматуры, теплотехники. Сегодня АО
            «Нижегородский машиностроительный завод» — одно из крупнейших предприятий российского ОПК, входит в состав
            концерна воздушно-космической обороны «Алмаз-Антей».
          </p>
        </CommonText>

        <Speech
          title="«Путь к Берлину — это доказательство превосходства нашей артиллерии»"
          author={{
            name: 'Главный конструктор завода № 92 в 1934–1942 гг. В. Г. Грабин:'
          }}
        >
          «Нашу артиллерию называли „богом войны“. В День Победы, куда бы вы ни поехали — к каналу Одер — Шпрее или к
          Зеловским высотам, или в дачные предместья Берлина, укрывшиеся в стройных сосновых лесах,— всюду услышали бы
          беспрерывный гул наших самолетов в воздухе и грохот артиллерии. Огненным щитом прикрывала артиллерия
          уверенный шаг пехоты и движение танков. Щит этот неумолимо двигался вперед, сметая на своем пути все
          преграды — траншеи, бетонные укрепления, населенные пункты, превращенные немцами в крепости. И когда едешь
          по дорогам войны — мимо полей, лесов, хуторов, городов, то воочию убеждаешься в мощи советских пушек. Путь к
          Берлину — это поистине кладбище немецкой техники, разбросанной на полях, в оврагах, на дорогах, на улицах
          городов. Это победа нашей артиллерии, доказательство ее превосходства над артиллерией немецкой».
        </Speech>
      </div>
    </div>
  )
}

export default Victory
