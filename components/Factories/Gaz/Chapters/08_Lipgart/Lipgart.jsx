import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Speech } from '../../../../'

import styles from './Lipgart.module.css'

const Lipgart = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Липгарт">
          <p>
            Андрей Александрович Липгарт проработал на Горьковском автозаводе 20
            лет. Его назначили главным конструктором предприятия спустя год
            после открытия ГАЗа — в 1933 году. На тот момент Андрей Липгарт был
            опытным конструктором, который хорошо зарекомендовал себя в
            профессиональных кругах, — у него за плечами было восемь лет работы
            в Центральном научно-исследовательском автомобильном и автомоторном
            институте (НАМИ).
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/gaz/8/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Окончил Императорское Московское техническое училище (ныне МГТУ им.
            Баумана). Начал карьеру в Центральном научно-исследовательском
            автомобильном и автомоторном институте (НАМИ). В 1933 году был
            назначен главным конструктором Горьковского автозавода. С 1952 года
            работал на Уральском автозаводе. В 1953 году вернулся в НАМИ в
            качестве главного конструктора. До 1973 года руководил кафедрой
            «Колесные машины» в МГТУ. В 1960 году ему присвоена степень доктора
            технических наук Honoris causa — по совокупности достижений.
          </p>
          <p className={styles.vrezka}>
            Андрей Александрович Липгарт (1898–1980). Родился в Москве в семье
            служащего немецкого происхождения.
            Награжден тремя орденами Ленина, двумя орденами Трудового Красного
            Знамени.
          </p>

          <p>
            От личного кабинета на ГАЗе Андрей Липгарт отказался. Он расположил
            свой стол среди конструкторских кульманов и работал в общем зале.
          </p>

          <p>
            О главном конструкторе Горьковского автомобильного завода имени В.
            М. Молотова отзывались как об открытом, честном и талантливом
            человеке, настоящем профессионале своего дела. До начала войны в
            1941 году под руководством Андрея Липгарта на заводе разработали и
            выпустили в серию 17 моделей автомобилей.
          </p>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            В 1941 году Горьковский автозавод, как и остальные предприятия,
            перешел на выпуск военной продукции. Именно под руководством Андрея
            Липгарта создавались автомобили повышенной проходимости ГАЗ-64 и
            ГАЗ-67. Это были оригинальные разработки, а не копии зарубежных
            аналогов. За работу над моделями ГАЗ-64, БА-64 и Т-60 Андрей
            Александрович Липгарт в апреле 1942 года получил звание лауреата
            Сталинской премии первой степени. Через год, в марте 1943 года, ему
            присвоили звание лауреата второй степени за усовершенствование
            конструкции танка Т-70.
          </p>
        </CommonText>

        <Speech
            title="«Смотрел вперед дальше всех»"
            author={{
              name:
                'Начальник лаборатории испытаний легковых автомобилей ГАЗа в годы войны М. С. Мокее:'
            }}
          >
            «Липгарт всегда знал все лучше других и чуть ли не раньше всех: он
            был самым знающим и в заводо­управлении, и в министерстве. Он смело
            брал на себя всю ответственность. Подчиненных строгал, но и защищал.
            Смотрел вперед дальше всех, а ошибался меньше всех».
          </Speech>

        <Speech
            title="«Я увидел настоящую работу»"
            author={{
              name: 'Конструктор ГАЗа в годы войны Н. А. Астров:'
            }}
          >
            «На ГАЗе я увидел настоящую, серьезную и большую конструкторскую,
            испытательную и доводочную работу, научился ее организации, а
            главное — осмысливанию конструкторского дела в большом и
            всестороннем смысле этих слов. Такой школы, кроме как у Андрея
            Александровича Липгарта, пройти было негде и невозможно. Более того,
            я думаю, что если бы судьба не свела меня с Андреем Александровичем,
            я не был бы чего-то стоящим конструктором».
          </Speech>
      </div>
    </div>
  )
}

export default Lipgart
