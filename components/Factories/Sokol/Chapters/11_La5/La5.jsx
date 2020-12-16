import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {
  MainText,
  CommonText,
  CommonImage,
  CommonImages,
  Legend
} from '../../../../'

import styles from './La5.module.css'

const La5 = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Ла-5: рождение легенды">
          <p>
            К концу 1941 года Горьковский авиазавод №21 был мощнейшим
            производителем истребителей в стране: он сдал фронту 1445 самолетов
            ЛаГГ-3 (всего за 1941–1942 гг. — 3583 истребителя).
            Конструкторы постоянно совершенствовали ЛаГГ-3, но увеличить
            скорость самолета без потери его боевой мощи не получалось. Было
            понятно, что в скором времени заводу снова предстоит осваивать
            производство новой машины.
          </p>

          {/* <p className={styles.vrezka}>
            Переход на Як-7 на авиазаводе был отменен, а самолет ЛаГГ-3 М-82
            (будущий Ла-5) был запущен в серию
          </p> */}
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/sokol/11/1.jpg" layout="fill" />

            <figcaption>
              Группа создателей нового истребителя Ла-5
            </figcaption>
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            На авиационном заводе № 21 начались работы над ЛаГГ-3 с новым
            мотором — двигателем М-107, который при сопоставимых с М-105
            габаритах был в полтора раза мощнее. Но все испытания заканчивались
            вынужденными посадками — мотор перегревался. Тогда группа
            энтузиастов во главе с заместителем Лавочкина С. М. Алексеевым
            предложила попробовать установить на истребитель другой двигатель —
            М-82 воздушного охлаждения разработки А. Д. Швецова. Все вопросы по
            подгонке нового двигателя решали прямо у фюзеляжа, работая день и
            ночь, — решалась судьба конструкторского бюро Лавочкина в Горьком.
          </p>

          <p>
            Когда истребитель был почти готов, на завод пришло постановление
            Государственного комитета обороны о переходе на выпуск Як-7.
            Лавочкина и его ОКБ переводили на завод №31 в Тбилиси. Но в Горьком
            все-таки успели провести летные испытания нового самолета — не
            решенным оставался только вопрос с перегревающимся маслом. Найти за
            короткий срок и доставить на завод новый радиатор было невозможно.
          </p>

          <p>
            Помог счастливый случай. Согласно заводской легенде, в сборочном
            цехе нашли ящик с «каким-то новым радиатором» — якобы люди Яковлева
            привезли его для своих новых машин. Главный конструктор Лавочкин,
            известный своей интеллигентностью и скромностью, никогда бы не пошел
            на то, чтобы взять чужое, но его отвлекли, в этот момент сняли
            эскизы, собрали радиатор и ночью укомплектовали самолет. Через
            несколько дней истребитель был готов — итоговые испытания показали,
            что температура масла теперь в норме.
          </p>
        </CommonText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/sokol/11/2.jpg" layout="fill" />

            <figcaption>
              Стахановец-двухсотник С. А. Боков на освоении мотора М-82
            </figcaption>
          </figure>
        </CommonImage>

        <CommonImages>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/sokol/11/3.jpg" layout="fill" />

            <figcaption>
              Новый истребитель Ла-5 имел мощное вооружение
            </figcaption>
          </figure>

          <figure className={classNames(styles.img, styles._3)}>
            <Image src="/images/sokol/11/4.jpg" layout="fill" />

            <figcaption>
              20-мм пушки крепились в верхнем секторе передней части фюзеляжа Ла-5
            </figcaption>
          </figure>
        </CommonImages>

        <Legend title="«Як» на пороге">
          <p>
            В конце октября 1941 года ОКБ А. С. Яковлева перевели из Москвы в
            Новосибирск на завод №153 — второе по мощности производство
            ЛаГГ-3. Там Яковлев быстро смог организовать линию по сборке своих
            Як-7 параллельно с ЛаГГами. Причем „своих“ рабочих авиаконструктор
            одел в белые халаты и пригласил кинооператора снять это
            производство на фоне сборщиков ЛаГГ-3 в телогрейках. Съемку
            отправили в Москву, и вскоре после этого последовало постановление
            ГКО о снятии ЛаГГов с серийного производства на заводе № 153 и
            запуске Як-7. Та же судьба, очевидно, ждала и Горьковский
            авиазавод.
          </p>

          <p>
            В условиях военного времени события могли развиваться быстро, но
            нарком авиапрома А.И. Шахурин, бывший в 1939–1940 гг. первым
            секретарем Горьковского обкома ВКП (б), отказался подписывать
            постановление о запуске серийного производства Як-7 в Горьком. Он
            предложил подождать, когда Яковлев наладит выпуск в Новосибирске.
            Лавочкина тогда предупредили, что у него есть примерно два месяца
            на то, чтобы завершить разработку нового истребителя в Горьком.
          </p>
        </Legend>

        {/* TODO: кальки */}
      </div>
    </div>
  )
}

export default La5
