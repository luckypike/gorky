import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Speech } from '../../../../'

import styles from './Loskutov.module.css'

const Loskutov = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Лоскутов">
          <p>
            Иван Кузьмич Лоскутов впервые пришел на Горьковский автомобильный
            завод в 1932 году в качестве практиканта. На тот момент он учился в
            Ленинградском индустриальном институте. В дневнике производственной
            практики ему написали отзыв: «Уезжая, товарищ Лоскутов оставил в
            рабочих живую струю. С такими товарищами можно гордо держать знамя
            техники».
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/gaz/7/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p className={styles.vrezka}>
            Иван Кузьмич Лоскутов (1900­–1982). Родился в Казанской губернии в
            семье крестьян. В 1934 году окончил Ленинградский индустриальный
            институт и начал работать на Горьковском автозаводе, который
            возглавил в мае 1938 года. В 1942 году был отозван на работу в
            Наркомат электростанций СССР, в 1943-м вернулся на ГАЗ. В 1948–1953
            гг. — директор Ульяновского автозавода. С 1953 года работал
            начальником производственного управления Министерства автомобильной
            промышленности. Награжден двумя орденами Ленина, орденами
            Октябрьской Революции, Кутузова второй степени, Отечественной войны
            первой степени, Трудового Красного Знамени, «Знак Почета».
          </p>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            В 1934 году И. К. Лоскутов вернулся на завод в качестве
            инженера-конструктора. Вскоре он дослужился до начальника прессового
            цеха, затем стал руководить производством. Завод он возглавил в 1938
            году. Работы было много: по воспоминаниям его дочери Светланы, Иван
            Кузьмич сутки пропадал на предприятии, контролируя строительство
            новых цехов — кузовного, моторного, литейного.
          </p>

          <p>
            С началом войны в 1941 году на плечи И. К. Лоскутова легла сложная и
            ответственная задача — в кратчайшие сроки наладить производство
            танков Т-60. Нужно было перестроить технологическую цепочку
            производства, сделать новые инструменты и приспособления. Цех по
            сборке танков разместили в кузовном корпусе № 5. Работали круглые
            сутки, многие оставались ночевать на производстве. И. К. Лоскутов не
            был исключением — кровать стояла в соседней от его кабинета комнате.
            «Работали не считаясь со временем. Работали и днем, и ночью, и в
            выходные дни. Тысячи автозаводцев неделями не выходили из цехов…» —
            вспоминал директор ГАЗа.
          </p>

          <p>
            В 1942 году И. К. Лоскутова отозвали на работу в Наркомат
            электростанций СССР. Однако после того, как в 1943 году Горьковский
            автозавод подвергся массовым бомбежкам и был практически уничтожен,
            И. К. Лоскутова вернули на предприятие. Под его руководством
            начались масштабные работы по восстановлению завода. Их удалось
            завершить в рекордно короткие сроки — за 120 дней.
          </p>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            На Горьковском автозаводе И. К. Лоскутов проработал почти десять лет
            — до 1948 года. Под его руководством в годы войны ГАЗу 33 раза
            вручали переходящее знамя ГКО за выдающиеся заслуги, а затем завод
            получил его на вечное хранение.
          </p>

          <Speech
            title="«Разговор был короткий»"
            author={{
              name: 'И. К. Лоскутов о возвращении на завод в 1943 году:'
            }}
          >
            «Приказ о моем возвращении на завод пришел неожиданно. Утром я сдал
            дела, вечером того же дня прибыл в Горький. И хотя мне было
            приказано сразу же явиться в обком партии, душа не выдержала:
            заглянул на автозавод. В обкоме разговор был короткий: принять дела,
            ознакомиться с обстановкой, организовать восстановительные работы,
            особое внимание уделить производству вооружения для фронта».
          </Speech>
        </CommonText>
      </div>
    </div>
  )
}

export default Loskutov
