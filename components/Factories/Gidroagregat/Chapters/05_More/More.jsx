import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Speech } from '../../../../'

import styles from './More.module.css'

const More = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Больше и лучшe">
          <p>
            В полную силу завод № 467 заработал в 1942 году. Тогда было
            завершено строительство основных корпусов, подготовлены рабочие
            кадры, сформирован административно-хозяйственный аппарат.
            Становлением предприятия руководил новый директор — А. Ф. Авербах.
            Молодому заводу достался молодой руководитель — 30-летний Абрам
            Филиппович до назначения работал на Горьковском авиазаводе № 21, где
            был мастером, начальником механической мастерской, начальником
            металлообрабатывающего цеха, начальником производственного отдела. С
            решением первоочередных проблем главной задачей нового руководителя
            было наращивание выпуска авиационных винтов и оптимизация
            производства.
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/gidroagregat/5/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            При нем в 1942 году завод № 467 вышел на выпуск до 40 винтов ВИШ-105
            в сутки. В 1943 году производственный план был выполнен на 102,8%,
            что составило 196% к плану 1942 года. «Завод работает ритмично.
            Проведены ценные мероприятия по улучшению технологии производства,
            отдельные операции идут по поточному производству, — докладывал в
            интервью городской многотиражке „Павловский металлист“ А. Ф.
            Авербах. — Изменение технологического процесса дало возможность
            упростить сборку изделий. Не использованное ранее оборудование
            пущено, изменена технология термообработки, освоена горячая
            штамповка…».
          </p>

          <p>
            Токарь Шалунов дал производственный рекорд — 2000 процентов нормы».
          </p>

          <p>
            С началом производства на Горьковском авиазаводе новых истребителей
            Ла-5 в Павлово появились и новые модификации винтов. Конструкторы
            работали над долговечностью лопастей. В июле 1943 года ГКО
            потребовало не только резко увеличить выпуск Ла-5, но и повысить
            численность исправных машин в строю. Если вначале Ла-5 оснащались
            винтами ВИШ-105В с деревянными лопастями, которые невозможно было
            восстановить в случае прострела или посадки на фюзеляж, то
            разработанные ремонтируемые металлические лопасти для ВИШ-105В
            позволяли продлить срок их службы.
          </p>

          <p>
            За успехи в организации производства в 1943 году А. Ф. Авербах
            получил свой первый орден Красной Звезды.
          </p>

          <p className={styles.vrezka}>
            В 1942 году завод вышел на выпуск до 40 винтов ВИШ-105 в сутки, а в
            1943 году увеличил объем вдвое
          </p>
        </CommonText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/gidroagregat/5/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <Speech
            title="«Мы втроем за 12 часов обрабатывали 90 лопастей»"
            author={{
              name: 'Ветеран завода № 467 М. П. Курдин:'
            }}
          >
            <p>
              «Я окончил ремесленное училище при заводе автотракторного
              инструмента, но на работу был направлен
              слесарем-инструментальщиком на завод № 467 14 декабря 1943 года. А
              мне тогда очень хотелось стать токарем. На заводе в
              инструментальном цехе № 2 меня быстро научили токарному делу и
              перевели в цех № 5 в группу механика, а потом я попросился на
              обточку комля лопасти для винта ВИШ-105. Вот эта работа пришлась
              мне по душе! Хотя и очень тяжелыми были заготовки, трудно
              перевыполнить норму выработки, меня радовало то, что я сам, своими
              руками делаю продукцию для настоящих боевых самолетов. И таких
              мальчишек, как я, в цехе было много. Мы на обработке комля лопасти
              — обточке нескольких диаметров и нарезке резьбы — сами
              организовали молодежную бригаду, в которую кроме меня вошли Ю. В.
              Боков и А. Ф. Усанин. Мы втроем за 12 часов успевали обрабатывать
              90 лопастей— а это значит, что еще 30 (на винт шло три лопасти)
              самолетов скоро взлетят в воздух.
            </p>

            <p>
              Бывало, что не выходили из цеха сутками — поспишь немного, и снова
              за работу. А тех, кто не смог выполнить норму, вахтер (в цехе была
              вертушка, как в проходной) не выпускал домой. Радовались, когда
              нас премировали за хорошую работу. Мне, например, однажды
              достались ватные штаны».
            </p>
          </Speech>
        </CommonText>
      </div>
    </div>
  )
}

export default More
