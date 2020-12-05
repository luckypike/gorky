import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Speech } from '../../../../'

import styles from './WomenFront.module.css'

const WomenFront = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Женский фронт">
          <p>
            В годы войны подавляющее большинство рабочих стеклозавода составляли
            женщины, в некоторых цехах мужчин не было вообще. Впервые в истории
            стеклоделия женщины обслуживали машины вертикального вытягивания
            стекла.
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/adcbsz/7/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Первой женской бригадой фуркистов руководила мастер-машинист В.М.
            Дубецкая. Исключительно женской была и первая на заводе
            комсомольско-молодежная фронтовая бригада А. Степановой, в которой
            трудились А. Попкова, О. Кочанова, А. Юдина, Ф. Акишева, М.
            Болдухова, В. Красильникова
          </p>

          <p>
            Главный принцип фронтовых бригад — не уходить из цеха, пока не будет
            выполнено задание. Иногда ночевали прямо в цехе — после
            16–18-часовой смены не было смысла тратить время на дорогу домой и
            обратно. Всего в годы войны на заводе было создано 70 фронтовых
            бригад, 80% сотрудников были стахановцами. Фронтовым объявил себя
            весь цех № 19, где собирали бронестекла для самолетов и танков.
          </p>

          <p>
            Первые трудовые награды военного времени заводчане получили в 1943
            году, выполнив производственную программу на два месяца раньше
            срока. Орденов и медалей были удостоены больше 40 сотрудников
            стеклозавода, в том числе начальник цеха № 19 А. Грачев и фацетчик
            цеха А. Сахабутдинов получили ордена Трудового Красного Знамени. В
            целом за 1941–1944 гг. по сравнению с довоенным периодом выпуск
            продукции Борским стеклозаводом увеличился вдвое, а в 1944 году по
            сравнению с 1940 годом — в пять раз.
          </p>

          <p>
            За выполнение производственных планов и освоение новых технологий в
            годы войны стеклозавод неоднократно получал Красное знамя ГКО, а в
            1946 году, как и другим предприятиям, внесшим особый вклад в дело
            победы, знамя было передано на вечное хранение.
          </p>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <Speech
            title="«За смерть отца я поклялась отомстить врагу упорным трудом»"
            author={{
              name:
                'Стахановка цеха № 19 А. Попкова в районной газете 1943 года:'
            }}
          >
            «Во время фацетировки стекла я внимательно слежу за тем, чтобы на
            детали не появилось по моей небрежности ни одной царапины. Малейшая
            царапина на стекле — это уже крупный брак в нашей работе. А чтобы не
            допускать брака по размеру, стараюсь как можно чаще прибегать к
            помощи шаблона. Он-то уж никогда не подведет! В результате вся
            продукция выходит из моих рук только хорошего качества. Около двух
            лет назад я получила горькую весть — на фронте погиб мой отец. За
            смерть его я поклялась отомстить врагу упорным трудом во имя любимой
            Родины. С тех пор я тружусь с удвоенной энергией. В течение смены я
            успеваю обрабатывать шесть деталей, выполняя задание на 230%.
            В отдельные же дни я даю более трех норм в смену».
          </Speech>
        </CommonText>
      </div>
    </div>
  )
}

export default WomenFront
