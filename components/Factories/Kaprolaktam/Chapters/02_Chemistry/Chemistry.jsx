import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainImage, MainText, CommonText, CommonImage, CommonImages } from '../../../../'

import styles from './Chemistry.module.css'

const Chemistry = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainImage>
          <figure className={classNames(styles.img, styles.intro)}>
            <Image src="/images/kaprolaktam/img.jpg" layout="fill" />
          </figure>
        </MainImage>
      </div>

      <div className={styles.page}>
        <MainText title="Химическое основание">
          <p>
            Строительство завода по производству хлора, этилена, каустической соды и соляной кислоты началось в
            Дзержинске в 1934 году. Пока велись строительные работы, предприятие называли «Заводстрой». На строительство
            огромных цехов, связанных между собой трубопроводами, приезжали крестьяне, рабочие и студенты из разных
            регионов СССР. В 1935 году на строительных участках работали 6000 человек. К апрелю 1937 года на заводе
            функционировала центральная часть — установка пиролиза керосина. 14 декабря 1939 года были запущены цехи № 4
            по производству хлора и № 6 по производству этилена и пропилена.
          </p>
        </MainText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/kaprolaktam/3/1.jpg" layout="fill" />
            <figcaption>Первые рабочие «Заводстроя»</figcaption>
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            Завод стал первым крупнотоннажным производителем хлорной продукции в СССР. Также на предприятии впервые в
            стране запустили цех разделения пирогаза — промышленного получения этилена путем разделения газов пиролиза
            керосина при глубоком охлаждении. Затем заработали цехи по сжижению хлора, производству дихлорэтана,
            каустической соды и соляной кислоты. К 1941 году завод производил 27 видов химических веществ. Накануне
            войны на долю завода приходилось 40% от общего объема производства хлора и каустика в СССР.
          </p>
        </CommonText>

        <CommonImages>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/kaprolaktam/3/2.jpg" layout="fill" />
            <figcaption>Первый колышек, забитый для строительства завода</figcaption>
          </figure>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/kaprolaktam/3/3.jpg" layout="fill" />
            <figcaption>Рабочие на строительстве нового химического завода</figcaption>
          </figure>
        </CommonImages>
      </div>
    </div>
  )
}

export default Chemistry
