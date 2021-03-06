import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Columns } from '../../../../'

import styles from './OneAndHalf.module.css'

const OneAndHalf = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Полуторки и ленд-лиз">
          <p>
            Производство автомобилей на ГАЗе с началом войны сократилось: за
            1941 год завод выпустил чуть более 3 тыс. легковых автомобилей.
            Однако потребность фронта в грузовых автомобилях сохранялась, и ГАЗ
            дал их армии более 68 тыс. В основном это были ГАЗ-ММ (38,6 тыс.),
            называемые «полуторками» за их грузоподъемность — 1,5 т. Конструкция
            военных ГАЗ-ММ упростилась: двери заменили брезентовыми полотнищами,
            крылья делали из кровельного железа, тормозов на передних колесах не
            было, а фара была только одна — левая.
          </p>
        </MainText>

        <Columns
          right={
            <div>
              <figure className={classNames(styles.img, styles.main)}>
                <Image src="/images/gaz/10/1.jpg" layout="fill" />
              </figure>
            </div>
          }
          left={
            <div>
              <p>
                «Полуторки» были необходимы фронту для военных перевозок. Именно
                ГАЗ-ММ курсировал по «дороге жизни», доставляя продукты в
                блокадный Ленинград. Историки А. А. Гордин, Е. И. Подрепный в
                своей книге «Производство танков Т-60 на Горьковском автозаводе
                в 1941–1942 годах» отмечают: «В конце 1941 года ГАЗ оказался
                перегруженным выпуском непрофильной продукции, а на первый
                квартал 1942 года заводу не были выделены фонды по всем решающим
                материалам (то есть их не планировалось и поставлять) для
                производства основной, автомобильной, продукции. И это при том,
                что план выпуска был утвержден рекордным по объему».
                Производство ГАЗ-ММ зависело от заводов-смежников. С началом
                войны из 65 предприятий 43 находились в процессе эвакуации. На
                новых местах производство наладить не успевали, поставки
                комплектующих шли с перебоями. ГАЗ два месяца не получал
                подшипники и аккумуляторы, перестал поступать качественный
                прокат коленчатого вала и деталей коробки скоростей от «Красного
                Октября». Из-за этого к концу 1941 года под угрозой срыва
                оказалось задание по выпуску грузовых автомобилей.
              </p>
            </div>
          }
        />

        {/* <CommonImage content>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/gaz/10/2.jpg" layout="fill" />
          </figure>
        </CommonImage> */}

        <CommonText>
          <p>
            Тогда И. К. Лоскутов направил в ГКО письмо, в котором предложил
            программу помощи предприятию. Руководство завода просило разрешить
            завоз импортного электрооборудования, ускорить восстановление
            смежных предприятий, выделить ГАЗу дополнительный фонд металла, в
            том числе отгрузить его с других предприятий — Горьковского
            металлургического завода им. Кагановича, Выксунского
            металлургического завода, «Красной Этны» и других.
          </p>
        </CommonText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/gaz/10/3.jpg" layout="fill" />
          </figure>
        </CommonImage>

        {/* <CommonImage>
          <figure className={classNames(styles.img, styles._4)}>
            <Image src="/images/gaz/10/5.jpg" layout="fill" />
          </figure>
        </CommonImage> */}

        <CommonText>
          <p>
            С ноября 1941 года СССР присоединился к американской программе
            ленд-лиза. Оплата поставок была отложена до окончания войны, при
            этом получатели должны были оплатить только то, что можно было
            использовать в гражданских целях. США для расчетов в основном
            предоставляли странам беспроцентные займы. Та техника, которая
            оказалась уничтоженной, оплате не подлежала. Если машины после войны
            были на ходу, их полагалось вернуть США. ГАЗ по этой программе всю
            войну собирал американские автомобили Ford, Studebaker, Dodge,
            Chevrolet, Willys. В книге «Свастика над Волгой. Люфтваффе против
            сталинской ПВО» М. Зефиров пишет: «Комплекты автомашин приходили во
            Владивостокский порт, затем по Транссибу эшелонами по 20 вагонов
            переправлялись на автомобильные заводы, в первую очередь в Горький.
            В 1942 году сборка на Горьковском автозаводе достигла почти 1000
            импортных автомобилей в месяц».
          </p>

          <p className={styles.vrezka}>
            «Полуторки» курсировали по «дороге жизни» и доставляли продукты в
            блокадный Ленинград
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._3)}>
            <Image src="/images/gaz/10/4.jpg" layout="fill" />
            <figcaption>
              Фронт нуждался в грузовых автомобилях, и завод обязали увеличить
              их сборку
            </figcaption>
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default OneAndHalf
