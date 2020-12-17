import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, CommonImages } from '../../../../'

import styles from './Crossing.module.css'

const Crossing = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Переправа, переправа...">
          <p>
            Основной продукцией судоверфи для фронта были понтонно-мостовые парки — сборные конструкции для наведения
            переправ через водные преграды при переброске войск и боевой техники. Окская судоверфь была и остается
            единственным в стране производителем таких переправ для военных. Тяжелый понтонный парк Н2П предназначался
            для наведения переправ грузоподъемностью до 75 т. Понтонами наплавного легкого парка (НЛП) оборудовали
            паромные и мостовые переправы грузоподъемностью от 3,5 до 12 т. Один из ключевых технических показателей
            понтонных парков — скорость сборки. Например, для переброски 50 бойцов стрелкового взвода с орудиями весом
            не больше 2,5 т инженерные войска могли навести переправу с помощью Н2П за 12 минут. Как правило, понтоны
            перевозились на специальных автомобилях ЗИС-5.
          </p>
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/shipyard/4/1.jpg" layout="fill" />
            <figcaption>Советские бойцы форсируют реку Южный Буг на Украине</figcaption>
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            Понтонные парки применялись на всех фронтах и считались одними из лучших в мире. Так, понтонный парк США
            того времени обеспечивал переправу войсковой техники массой не более 32 т. В годы войны Мордовщиковская
            судоверфь выпустила более 200 парков разных типов, в том числе 86 понтонных парков Н2П, больше 100 НЛП.
            Выпуск гражданских судов во время войны прекратился, но судоверфь продолжала работать над крупными заказами
            для ВМФ, связанными в первую очередь с производством нефтеналивных и траловых барж. В 1942–1943 гг.
            судоверфь отправила на фронт 29 тральщиков для подрыва магнитных и акустических мин в фарватере Волги и
            районе Сталинграда. В составе Волжской военной флотилии они сыграли решающую роль во время Сталинградской
            битвы — обеспечивали противоминную оборону и работали на переправах через Волгу.
          </p>
          <p>
            Мордовщиковский завод в больших объемах изготавливал также фугасные авиационные бомбы (ФАБ-250), корпуса и
            стабилизаторы снарядов М-8 для гвардейских реактивных минометов «Катюша», бронированные огневые точки,
            противотанковые ежи и множество инструмента для оборонительных рубежей. В сварочных цехах изготавливались
            масло- и бензобаки для аэросаней. Выпускались газогенераторные установки к автомобилям ЗИС-2 и ГАЗ-42.
            Производилось и корабельное артвооружение — башенная установка ДШКМ-2Б под два крупнокалиберных пулемета
            ДШК.
          </p>
          <p>
            В послевоенные годы Мордовщиковская судоверфь продолжила строить понтонные переправы, автодорожные наплавные
            мосты. Кроме того, после реконструкции в 1950-х годах завод освоил выпуск сухогрузных судов. Эти
            специализации сохраняются на судоверфи и сегодня.
          </p>
        </CommonText>

        <CommonImages>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/shipyard/4/3.jpg" layout="fill" />
            <figcaption>Артиллеристы переправляются через реку Шпрее на востоке Германии</figcaption>
          </figure>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/shipyard/4/2.jpg" layout="fill" />
            <figcaption>Тяжелые понтонные парки Н2П перевозили на грузовиках ЗиС-5</figcaption>
          </figure>
        </CommonImages>
      </div>
    </div>
  )
}

export default Crossing
