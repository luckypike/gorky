import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Speech } from '../../../../'

import styles from './AfterWar.module.css'

const AfterWar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="После войны">
          По окончании войны «Красное Сормово» вернулось к судостроению. На
          предприятии начиналась реконструкция, чтобы не менее чем в три раза
          увеличить количество выпускаемых судов. Однако с танкостроением завод
          простился не сразу.
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/sormovo/11/1.jpg" layout="fill" />
            <figcaption>
              После войны в Нижегородском кремле установили танк Т-34-85,
              который участвовал в освобождении Вены
            </figcaption>
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            В послевоенные годы на сормовском заводе учредили экспериментальное
            танковое бюро, конструкторы которого разработали проект плавающего
            танка. Первые образцы не отвечали заявленным характеристикам, и
            работы приостановили. Впоследствии проект передали конструктору
            кировского завода Жозефу Котину, а опытные машины стали выпускать в
            Челябинске. В испытаниях плавающего танка принимали участие и
            сормовичи. Серийное производство новой продукции было размещено в
            Волгограде.
          </p>

          <p>
            Танковое бюро «Красного Сормова» в послевоенные годы разработало
            также командирскую машину, но вскоре было расформировано. Завод
            переключился на гражданскую продукцию — речное судостроение,
            вагонные колеса, газогенераторные установки и запчасти для
            тракторов.
          </p>
        </CommonText>

        {/* TODO: Поставить фото телеграммы */}
        <Speech
          title="«Честно трудился все годы войны»"
          author={{
            name:
              'Мастер-орденоносец фасонолитейного цеха «Красного Сормова» И. Баженов'
          }}
        >
          «В первые дни Великой Отечественной войны я в числе 120 сормовичей
          подписал письмо горьковчанам, идущим на фронт. Мы обещали фронтовикам
          работать не покладая рук. И вот сегодня мы можем с гордостью сказать:
          мы свое слово сдержали, так же, как и вы, сдержали свое слово,
          поклявшись разбить врага. Я честно трудился все годы войны, несмотря
          на преклонный возраст. Десятки моих учеников, воспитанных в годы
          войны, работают квалифицированными формовщиками и бригадирами. Я и мои
          воспитанники дали фронту много продукции сверх плана... Начался период
          мирного развития. Сормовичи не ослабят и теперь темпов своей работы».
        </Speech>
      </div>
    </div>
  )
}

export default AfterWar
