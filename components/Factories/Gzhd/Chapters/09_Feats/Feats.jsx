import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, Speech, CommonImage } from '../../../../'

import styles from './Feats.module.css'

const Feats = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Рядовые подвиги">
          <p>
            В паровозах того времени деталью, доставлявшей много хлопот, была
            колосниковая решетка. Упавший колосник блокировал приток воздуха, и
            дальнейшее ускорение поезда становилось невозможным.
            В мирное время можно было позволить себе дождаться, пока топка
            достаточно остынет, чтобы устранить неполадку, но в условиях войны
            такой простой мог стоить жизни многих людей. Во время длительных
            обстрелов личный состав «Козьмы Минина» и «Ильи Муромца» терял
            сознание от жары и большого количества пороховых газов,
            накапливавшихся внутри бронеплощадок.
          </p>
        </MainText>

        <CommonImage congtent>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/gzhd/9/1.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            А.С. Потехин в книге «31-й особый» описывает воспоминания машиниста
            бронепоезда «Илья Муромец» А. В. Бирюкова: «Не поставив на место
            колосники, ходу не дашь, а как их поставишь? Для этого надо паровоз
            охладить, но „Юнкерсам“ не прикажешь, чтобы они обождали… И тут
            машинист бронепоезда „Илья Муромец“ Бирюков схватил ватные брюки,
            быстро натянул на себя, надел фуфайку, шапку ушанку. И крикнул своим
            помощникам: „Лейте!“ Помощник машиниста Дрозд окатил Бирюкова
            холодной водой. Журухин бросился к топке, отгреб поглубже
            раскаленные угли, потом придержал машиниста за руку, метнулся в
            угол, собрал разное тряпье, окунул в воду и, не выжимая, начал
            торопливо обматывать им Бирюкова. В топке все это тут же взялось
            паром. Глаза заливало не то слезами, не то потом. Они готовы были
            выйти из орбит. Голова трещала. Пар стал рассеиваться, но жара не
            спала, тряпье задымилось. Журухин и Дрозд помогли выбраться из
            огненного ада, облили водой. Тлевшая одежда зашипела. Помощники в
            две лопаты принялись бросать уголь, и бронепоезд стал набирать
            скорость… Наши люди по несколько часов не покидали крытые
            бронеплощадки. Веки опухали, лица чернели, гимнастерки не высыхали
            от пота; командиры орудий, наводчики, заряжающие, подносчики
            задыхались от жары и порохового дыма, но не отходили от орудий. Тех,
            кто терял сознание, подтаскивали к люкам, и, отдышавшись, они
            возвращались обратно».
          </p>

          <p>
            Угольные районы запада страны были отрезаны от центра Советского
            Союза войной. Отопление паровозов перевели на дрова. За поездку
            приходилось перекидывать в топку паровоза по 100–120 куб. м сырых
            тяжелых дров.
          </p>
        </CommonText>

        <Speech
          title="«Надевали лямки, как в старину бурлаки»"
          author={{
            name:
              'Работница станции Каменный Овраг в годы войны И. Молчанова'
          }}
        >
          «Два кубометра дров выработки в день в тайге — это не пустяки. Ведь
          труд был абсолютно не механизирован. Только топоры для валки
          деревьев и двуручная пила, чтобы бревна были стандартной длины.
          Вдоль железной дороги из окрестностей деревни Озеро к станции
          Каменный Овраг была построена деревянная дорога. Называли ее
          лежневкой. Толстые доски были как рельсы положены по лесу — иначе
          тяжелые повозки с бревнами просто бы вязли в земле. Вместо
          локомотивов на таких дорогах были лошади, а то и мы сами. Надевали
          лямки, как в старину бурлаки».
        </Speech>
      </div>
    </div>
  )
}

export default Feats
