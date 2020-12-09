import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Speech } from '../../../../'

import styles from './FirstBombing.module.css'

const FirstBombing = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Первые бомбардировки">
          <p>
            Пока ГАЗ направлял все силы на увеличение производства, фашистская
            авиация, готовясь к бомбежкам, совершала разведывательные полеты над
            Горьким. Самолеты летали над автозаводом, изучая местность. Первые
            бомбы на город гитлеровцы сбросили в ночь на 4 ноября 1941 года,
            удары пришлись по заводам им. Ленина, «Двигатель Революции» и ГАЗу.
            Налет продолжался всю ночь. Один из снарядов попал в бомбоубежище,
            где укрывались вместе с другими автозаводцами сотрудники из
            руководящего состава автозавода.
          </p>
        </MainText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/gaz/9/1.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            Одиночные налеты немецкой авиации продолжались до 9 ноября и
            повторились зимой 1942 года. В феврале директор завода И. К.
            Лоскутов писал в Горьковский комитет обороны о неорганизованной
            системе защиты предприятия. Он просил разместить на подступах к
            заводу отдельный зенитно-артиллерийский полк для прикрытия ТЭЦ и
            западной части предприятия, поскольку из Горького отозвали несколько
            пушечно-артиллерийских полков. В апреле 1942 года на ГАЗе
            предполагалось соорудить маскировку, чтобы предотвратить налеты
            немецкой авиации. Однако спрятать завод было сложно из-за большой
            территории и удаленности от жилых кварталов. Кроме того, маскировке
            мешали и четкие географические указатели, в первую очередь стрелка
            Волги и Оки, которая позволяла легко сориентироваться в городе с
            воздуха.
          </p>
        </CommonText>
      </div>

      <div className={styles.images}>
        <figure className={classNames(styles.img, styles._1)}>
          <Image src="/images/gaz/9/2.jpg" layout="fill" />
        </figure>

        <figure className={classNames(styles.img, styles._2)}>
          <Image src="/images/gaz/9/3.jpg" layout="fill" />
        </figure>

        <figure className={classNames(styles.img, styles._3)}>
          <Image src="/images/gaz/9/4.jpg" layout="fill" />
        </figure>
      </div>

      <div className={styles.page}>
        <Speech
          title="«Враг в первую очередь старается поразить автозавод»"
          author={{
            name:
              'Из письма директора ГАЗа И. К. Лоскутова и парторга ЦК в годы войны И. В. Маркина:'
          }}
        >
          «Имеющаяся система активной зенитной обороны юго-западного сектора
          Горького и стоящего на передовой его линии автозавода явно
          неправильна и ни в коей мере не отвечает важности этого сектора.
          Итоги всех налетов показали, что враг в первую очередь старается
          поразить автозавод, который, в отличие от других заводов, имеет
          огромную отдельно расположенную территорию, прекрасные ориентиры на
          подступах к нему. Заводы, стоящие в глубине районов Горького, как
          правило, прикрываются полком, а автозавод, несмотря на важность его
          и по существу прикрывающий зенитными средствами эти заводы с
          юго-западного направления, имеет явно неорганизованную систему
          обороны».
        </Speech>

        <Speech
          title="«Немец вел себя хозяином»"
          author={{
            name: 'Инженер ГАЗа в годы войны И. Харкевич:'
          }}
        >
          «Немец вел себя хозяином и бомбил на выбор... Всю ночь была бомбежка
          автозавода, 12 часов просидели в щели и вышли лишь под утро, когда
          объявили отбой. Возник ряд пожаров, бомбы попали в цехи автозавода,
          несколько попали в ТЭЦ, но не взорвались».
        </Speech>

        <Speech
          title="«Барак сгорел вместе с людьми»"
          author={{
            name: 'Конструктор ГАЗа в годы войны Б. Дехтяр:'
          }}
        >
          «4 ноября 1941 года средь бела дня низко пролетели самолеты с
          черными крестами: над людьми в очередях, над заводскими проходными.
          В 16 часов 30 минут начались обстрел и бомбежка улиц, домов и
          завода. Беженцев из Москвы расселили в Автозаводском районе. Они
          жили в бараках около гостиницы. В ту бомбежку один их барак сгорел
          вместе с людьми, другой был разрушен. У шестой проходной ГАЗа бомба
          попала в автобус с людьми. Погибших женщин, детей, стариков
          схоронили в групповой могиле в лесопитомнике (сегодня это монумент
          Славы с Вечным огнем — ред.). 4 ноября было убито 55 человек, ранено
          141».
        </Speech>
      </div>
    </div>
  )
}

export default FirstBombing
