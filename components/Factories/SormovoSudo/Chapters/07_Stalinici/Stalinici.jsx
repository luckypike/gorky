import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../'

import styles from './Stalinici.module.css'
import Columns from '../../../../Columns/Columns'

const Stalinici = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Сормовские «сталинцы»">
          <p>
            «Эски», или «сталинцы», на «Красном Сормове» строили с 1936 года. В
            годы войны горьковское предприятие передало фронту десять таких
            субмарин. Работа над этими большими подлодками велась круглосуточно,
            без выходных и праздников. Три из десяти переданных фронту
            сормовских «Эсок» стали Краснознаменными — С-13, С-101 и С-104.
          </p>
        </MainText>

        {/* <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/sormovo_sudo/7/3.jpg" layout="fill" />
          </figure>
        </CommonImage> */}

        <Columns
          left={
            <figure className={classNames(styles.img, styles._2)}>
              <Image src="/images/sormovo_sudo/7/2.jpg" layout="fill" />
            </figure>
          }
          right={
            <div>
              <p>
                Самый известный подвиг связан с именем тринадцатой «Эски». Ночью
                30 января 1945 года в Балтийском море три торпеды, посланные с
                С-13, потопили принадлежащий германскому ВМФ лайнер «Вильгельм
                Густлофф». По разным оценкам, погибли от 4 до 9 тыс. человек —
                экипаж, военнослужащие и беженцы.
              </p>

              <p>
                С-13 занимает первое место в советском флоте по суммарному
                тоннажу потопленных вражеских судов. Кроме того, это
                единственная балтийская субмарина серии, прошедшая всю войну и
                дожившая до победы.
              </p>

              <p>
                Отраслевое издание «Военное обозрение» пишет, что «по сравнению
                с „Щуками“ лодки типа „сталинец“ («Эски») представляли собой
                качественный скачок вперед»: «Они отличались лучшей
                обитаемостью, которая обеспечивалась просторными отсеками и
                рациональным расположением оборудования и механизмов. Скорость
                надводного хода считалась просто огромной — порядка 19,5 узла.
                Маневренные характеристики подводных лодок типа „С“ считались
                вполне удовлетворительными на всем периоде их эксплуатации».
              </p>
            </div>
          }
        />

        <CommonText>
          <p className={styles.vrezka}>
            По сравнению с «Щуками» «Эски» представляли собой качественный
            скачок вперед
          </p>
        </CommonText>
        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/sormovo_sudo/7/1.jpg" layout="fill" />
            <figcaption>
              Строительство подлодки «Эска» в судовой яме. Группа рабочих за
              клепкой корпуса. Общий вид носового окончания и корпуса
            </figcaption>
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Stalinici
