import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Speech } from '../../../../'

import styles from './ShellsForKatyush.module.css'

const ShellsForKatyush = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Снаряды для «Катюш»">
          С 1942 года «Красное Сормово» стало дублером другого горьковского
          завода — «Двигатель Революции». Оно было головным предприятием по
          сборке реактивных снарядов М-20 и М-13 для «Катюш».
        </MainText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/sormovo/10/1.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            Историк Павел Пустырев пишет, что в цехах, выделенных для
            производства снарядов для «Катюш» на «Красном Сормове», не было
            подготовленных площадей, а сборку надо было начинать немедленно —
            фронт не ждал: «Использовали большие судовые брезенты, создали еще
            один пролет при цехе, покрыв брезентами самодельный металлический
            каркас и оборудовав пролет стеллажами для сборки снарядов для
            „Катюш“. Пролет получился настолько удачным, что в нем производили
            все работы, в том числе и электросварку, не опасаясь демаскировки в
            ночное время».
          </p>

          <p className={styles.vrezka}>
            На «Красном Сормове» собрали 1,5 млн снарядов для «Катюш» и еще
            столько же других боеприпасов
          </p>

          <p>
            За годы войны на «Красном Сормове» собрали 1,5 млн снарядов для
            «Катюш» и еще столько же других боеприпасов. В отличие от снарядов
            М-13, которые использовались Красной Армией с начала войны, снаряды
            М-20 поступили на вооружение в 1942 году. Они были единственными
            фугасными реактивными снарядами калибра 132 мм. Историк А. Широкорад
            пишет, что вес взрывчатого вещества в боевой части М-20 был увеличен
            до 18,4кг, благодаря чему снаряды успешно использовались для
            разрушения полевых укреплений противника: «К недостаткам снаряда
            относились недостаточная дальность стрельбы (до 5,05 км) и то, что
            из-за больших размеров снаряды М-20 можно было запускать только с
            верхних направляющих боевых машин, что вдвое уменьшало вес залпа».
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/sormovo/10/2.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <Speech
          title="«Мы тоже громили врага»"
          author={{
            name: 'Ветеран завода «Красное Сормово» Г. Чернов'
          }}
        >
          «Не все знают, что кроме „Катюш“ были еще и „Ванюши“. Это особый вид
          снарядов огромной разрушительной силы, которые использовались для
          уничтожения военной техники и живой силы противника на близком
          расстоянии. Для этих снарядов, шарообразных по форме, мы тоже делали
          ящики. Причем „Ванюши“ летели к цели вместе с деревянной „тарой“.
          Значит, наши ящики тоже громили врага!».
        </Speech>
      </div>
    </div>
  )
}

export default ShellsForKatyush
