import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainImage, CommonText, CommonImages, Speech } from '../../../../'

import styles from './Ssk.module.css'

const Ssk = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainImage>
          <figure className={classNames(styles.img, styles.intro)}>
            <Image src="/images/ssk/img.jpg" layout="fill" />
            <figcaption>Вид на городецкий затон в 1900 году</figcaption>
          </figure>
        </MainImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Городецкая судоверфь была основана в 1918 году после национализации зимовавших в Городце судов: было решено
            «сосредоточить весь ремонт в одной общей для всего затона мастерской, для каковой цели подходит каменное
            двухэтажное здание бывшей мельницы». Сначала верфь ремонтировала деревянные баржи, буксирные и пассажирские
            пароходы. Активное судостроение развернулось на территории затона в 1930-е годы: судоверфь спускала на воду
            баржи для Амура, речные трамвайчики для Волги.
          </p>
          <p>
            Накануне войны, в 1940 году, на предприятии было организовано базовое конструкторское бюро. Это оказалось
            очень кстати: в срочном порядке верфи пришлось осваивать новые технологии — как по основному профилю, так и
            по другим направлениям производства. Предприятие выпускало десантные лодки, понтоны, аэросани, волокуши, а
            также корпуса 50-мм и 82-мм мин. И если боеприпасы производились более-менее ритмично с первых месяцев
            войны, то заказы на другую, далекую от судостроительной тематики, продукцию поступали внезапно и требовали
            срочной мобилизации как инженерных, так и рабочих сил.
          </p>
        </CommonText>

        <Speech
          title="«За время войны предприятие было серьезно перестроено»"
          author={{ name: 'Первый секретарь Городецкого райкома ВКП (б) в годы войны Д. А. Поляков' }}
        >
          «Судоверфь — предприятие, которое в прошлом имело незначительное задание, и то в течение четырех-пяти лет до
          1941 года не выполняло, за время войны было серьезно перестроено. В 1940 году стоимость валовой продукции — 5
          млн руб., в 1944 году — 11,7 млн руб. За время войны кроме нового судостроения и ремонта флота судоверфь дала
          фронту 200 тыс. мин, около 3 тыс. понтонов, или 104 парка инженерного вооружения, более 4 тыс. лодок, 67
          аэросаней, 50 плашкоутов».
        </Speech>

        <CommonImages>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/ssk/2.jpg" layout="fill" />
            <figcaption>Сотрудник судоверфи регулирует двигатель газохода</figcaption>
          </figure>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/ssk/1.jpg" layout="fill" />
            <figcaption>Тельферная лебедка на строительстве баржи</figcaption>
          </figure>
        </CommonImages>

        <CommonText>
          <p>
            Выпуск одних изделий удавалось освоить полным циклом (например, судоверфь изготовила больше сотни понтонных
            парков для инженерных войск — это сопоставимо с крупнейшими производителями таких переправ), в других
            случаях верфь становилась звеном в производственной кооперации. После 1943 года, с сокращением оборонзаказа
            на боеприпасы, Городецкая судоверфь, как и другие предприятия отрасли, сосредоточилась на своей основной
            специализации.
          </p>
          <p>
            С восстановлением мирного производства уже в 1946 году предприятие выпустило 10 деревянных барж
            водоизмещением 2,4 т, а в 1948 году — 22 крупнотоннажные баржи. На предприятии было запущено новое
            производство металлических сухогрузных барж грузоподъемностью 600 т. В 1950-е Городецкая верфь стала базой
            железобетонного судостроения на Волге. Плавучие доки на железобетонных и металлических корпусах есть в
            портфеле заказов судоверфи и сегодня. Благодаря своему географическому положению и оснащению верфь может
            строить крупнотоннажные суда практически любого водоизмещения. По ряду позиций предприятие является
            единственным поставщиком Вооруженных Сил страны.
          </p>
          <p className={styles.vrezka}>
            Более 4000 десантных лодок производства Городецкой судоверфи отправлено на фронт
          </p>
        </CommonText>

        <Speech
          title="«Шагая по колено в холодной воде, на плечах доставили материалы в цех»"
          author={{ name: 'Журналист газеты «Горьковская коммуна» А .Шишов в репортаже от 25 апреля 1945 года' }}
        >
          «Однажды весной одному из цехов грозил простой из-за недостатка материалов. По срочному требованию их привезли
          из Москвы на станцию Правдинск, но из Правдинска в Городец доставить их было нельзя. Лед на Волге порыхлел,
          дорога стала непроходимой, у берегов создались большие закраины, только смельчаки-одиночки еще переправлялись
          по льду, который не сегодня-завтра должен был тронуться. Простой из-за материалов был неизбежен, но рабочие не
          остановили производство. Накануне самого ледохода целый цех во главе с мастерами пошел в Правдинск. Шагая по
          колено в холодной воде, выступившей на льду, они в тот же день на плечах доставили материалы в цех».
        </Speech>
      </div>
    </div>
  )
}

export default Ssk
