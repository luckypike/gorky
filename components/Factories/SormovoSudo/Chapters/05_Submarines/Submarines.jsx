import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Speech } from '../../../../'

import styles from './Submarines.module.css'
import CommonImages from '../../../../CommonImages/CommonImages'

const Submarines = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Подлодки вернули в строй">
          <p>
            С началом войны судостроение на «Красном Сормове» прекратилось, все начатые корабли законсервировали. Силы
            рабочих были направлены на производство необходимых фронту танков Т-34 и боеприпасов.
            Лишь в 1942 году завод возобновил производство для ВМФ, расконсервировав задельные корабли, а также заложив
            несколько новых подлодок серии «Малютка».
          </p>
        </MainText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._3)}>
            <Image src="/images/sormovo_sudo/5/4.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            Главным конструктором по морскому судостроению на заводе «Красное Сормово» был Михаил Исаакович Лернер
            (1908–2004). Он окончил Индустриальный институт и пришел на предприятие в 1930 году. Под его руководством
            строились подводные лодки «Щука», «Эска» и «Малютка». Накануне Великой Отечественной войны его отправили в
            Кронштадт руководить сдаточной базой. В условиях начавшейся блокады Ленинграда М. И. Лернер участвовал в
            завершении строительства трех подлодок типа «С». Вернувшись на «Красное Сормово», М. И. Лернер руководил
            танко-сборочным цехом по выпуску Т-34, затем, после того как предприятие возобновило строительство судов, он
            возглавил эту работу. М. И. Лернера наградили орденами Ленина, Трудового Красного Знамени, Красной Звезды,
            «Знак Почета».
          </p>
        </CommonText>

        <CommonText>
          <p className={styles.vrezka}>
            «Красное Сормово» в годы Великой Отечественной войны стало лидером по производству подлодок в СССР
          </p>
        </CommonText>

        <CommonImages>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/sormovo_sudo/5/1.jpg" layout="fill" />
          </figure>

          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/sormovo_sudo/5/3.jpg" layout="fill" />
          </figure>
        </CommonImages>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/sormovo_sudo/5/2.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            Завод № 112 «Красное Сормово» в годы Великой Отечественной войны стал лидером по производству подлодок в
            СССР. Предприятие передало флоту 27 субмарин — почти половину подводного флота, построенного в эти годы в
            Советском Союзе (всего 55 штук). При этом 22 подводные лодки завод построил самостоятельно и только пять — в
            кооперации с другими предприятиями. В том числе завод «Красное Сормово» передал фронту 17 подводных лодок
            XII серии типа «Малютка».
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._4)}>
            <Image src="/images/sormovo_sudo/5/5.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <Speech
          title="«Чрезвычайно сложная задача»"
          author={{
            name: 'Ответственный сдатчик подводных лодок на «Красном Сормове» в годы войны П. Черноверхский:'
          }}
        >
          «Постановлением Государственного комитета обороны СССР на заводе „Красное Сормово“ в 1942 году возобновились
          строительство и сдача законсервированных подводных лодок серии IX-бис. Для завода это была чрезвычайно
          сложная задача: с одной стороны, требовалось увеличить выпуск танков Т-34 при явном недостатке кадров, а с
          другой — необходимо было срочно восстанавливать межотраслевые и внутриотраслевые связи по поставкам
          лодочного оборудования».
        </Speech>
      </div>
    </div>
  )
}

export default Submarines
