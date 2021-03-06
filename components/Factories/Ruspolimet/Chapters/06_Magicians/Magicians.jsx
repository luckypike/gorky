import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, Speech, CommonImage } from '../../../../'

import styles from './Magicians.module.css'

const Magicians = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="«Чародеи сталеварения»">
          <p>
            С началом войны мартеновский цех КМЗ полностью перешел на выпуск
            высоколегированной стали, которую производили в условиях нехватки
            сырья. При этом КМЗ не просто должен был изготавливать новые виды
            продукции, но и регулярно увеличивать объемы производства. В
            условиях дефицита мазута в качестве топлива стали использовать газ,
            как в 1920–1930-х годах. В то время он поставлялся с генераторной
            станции, оснащенной самодувными шахтами фирмы Siemens, заглубленными
            в землю. Измельченные в щепу дрова или торф в шахты закладывали
            вручную, золу потом вычищали так же. Это была крайне тяжелая работа,
            которую сотрудники завода называли настоящим адом. В 1929 году КМЗ
            запустил в действие новую газостанцию с тремя шахтами, которая была
            оснащена механическими транспортерами для подачи топлива на верхний
            этаж к бункерам и устройствами механизированной уборки золы.
            Важнейшую роль газостанция сыграла в 1942 году, когда мазута
            особенно не хватало — из-за южного наступления гитлеровцев в рамках
            операции «Эдельвейс» были заглушены и подготовлены к уничтожению
            нефтяные скважины в Баку, и азербайджанская нефть в регионы СССР не
            поставлялась.
          </p>
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/ruspolimet/6/2.jpg" layout="fill" />
            <figcaption>Рабочие мартеновского цеха</figcaption>
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            Спецзаказы поступали из Москвы, и отказаться от их выполнения завод
            не мог. Например, на КМЗ пришла директива освоить выплавку хромистой
            стали, проката листов из нее и изготовления защитных спинок для
            сидений летчиков. Завод стал одним из первых в стране, кто освоил
            производство спинок. Выручили мартеновцы завода, когда понадобилось
            отлить чугун, чтобы делать корпуса для снарядов для 76-мм пушек.
            Стандартно это происходит в доменной печи, однако из-за отсутствия
            сырья справиться с заданием и отлить корпуса для снарядов
            чугунно-литейный цех не мог. Тогда было принято решение отлить чугун
            в мартеновской печи. За решение таких непростых задач мартеновцев на
            заводе называли «чародеями сталеварения».
          </p>
        </CommonText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/ruspolimet/6/1.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <Speech
          title="«В цехе было очень много дыма и чада»"
          author={{
            name: 'Ветеран КМЗ И. К. Костров'
          }}
        >
          «Работали 10–12 часов в сутки, а вот хлеба при этом давали 600 г. В
          зимнее время при температуре 30–40 градусов отапливали цех
          „горнушками“. Для отопления сжигали кокс и все деревянные постройки, в
          том числе и полы. Окна были закрашены для маскировки краской, так как
          вечером в 10 часов пролетали фашистские самолеты на Горький и бомбили
          все заводы. В цехе было очень много дыма и чада от „горнушек“. Умыться
          можно было только холодной водой. Туалеты были только на улице».
        </Speech>
      </div>
    </div>
  )
}

export default Magicians
