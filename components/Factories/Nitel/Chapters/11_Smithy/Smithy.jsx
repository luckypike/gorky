import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImage, Columns, Speech } from '../../../../'

import styles from './Smithy.module.css'

const Smithy = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Кузница связистов">
          <p>
            В первые месяцы войны завод им. В. И. Ленина много сделал для
            Горьковской военной школы радиоспециалистов, которая была
            организована по приказу наркома обороны в Нижегородском кремле через
            месяц после начала войны. Помимо учебных классов, размещенных на
            площадях кварцевого цеха завода им. В. И. Ленина, были созданы
            специальные радиополигоны ближнего и дальнего действия.
          </p>
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/nitel/12/1.jpg" layout="fill" />
            <figcaption>
              Курская дуга. Командир батареи лейтенант Н. Ковалев ведет
              наблюдение и отдает приказы радиотелефонисту. 1943 год
            </figcaption>
          </figure>
        </CommonImage>

        <Columns
          right={
            <div>
              <p>
                На них курсанты получали навыки работы в условиях, приближенных
                к боевым. В первые годы Горьковская военная школа выпускала
                радистов, работающих на радиостанциях со скоростью 8–10 групп в
                минуту (структурная единица текста, состоящая из пяти знаков
                телеграфного кода), в 1943–1944 годах радисты работали уже со
                скоростью 12–15 групп в минуту. Всего за годы войны школа
                подготовила и отправила в ряды действующей армии более 1 тыс.
                специалистов.
              </p>
            </div>
          }
          left={
            <div>
              <figure className={classNames(styles.img, styles._1)}>
                <Image src="/images/nitel/12/2.jpg" layout="fill" />
                <figcaption>
                  Выпускницы Горьковской военной школы радиоспециалистов. 1942
                  год
                </figcaption>
              </figure>
            </div>
          }
        />

        <Speech
          title="«Девушкам никаких поблажек не было»"
          author={{
            name:
              'Выпускница Горьковской военной школы радиоспециалистов А. Н. Коновалова:'
          }}
        >
          «По призыву комсомола нас, девушек, мобилизовали в ряды Советской
          Армии в 1942 году. В ноябре я была направлена в Горьковскую военную
          школу радиосвязистов. Девушек было две роты. Были также
          девушки-инструкторы. Я была зачислена в пятую роту. Командиром роты
          был старший лейтенант Станкевич, а инструкторами Софа Пеккер, Люба
          Ящук и Мария Жданова (радистка 1-го класса завода № 197). Дисциплина в
          школе была строгая. Никаких поблажек не было. Перед отправлением на
          фронт командование призывало всех беречь честь своей школы. После
          школы я попала в 50-й отдельный мотоциклетный полк Третьей гвардейской
          танковой армии под командованием генерала Рыбалко. Работала на
          радиостанциях РСБ и РБ, которые мы изучали в школе. Со мной попали
          девушки нашей школы из третьей роты Лиза Горская, Оля Горева, Женя
          Григорьева, Лариса Жукова. Оля и Женя были ранены. Остались мы трое и
          воевали до конца в составе своего полка, с которым прошли от Москвы до
          Берлина, Праги и Вены».
        </Speech>
      </div>
    </div>
  )
}

export default Smithy
