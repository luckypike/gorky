import React from 'react'

import {
  MainText,
  CommonText
} from '../../../../components'

import styles from './Heritage.module.css'

const Heritage = () => {
  return (
    <div className={styles.root}>
      <MainText title="Наследие братьев Струве">
        Кулебакский металлургический завод (КМЗ) был основан помещиком Николаем
        Федоровым, владевшим имением в селе Кулебаки, и выксунским купцом
        Алексеем Бородачевым в 1866 году. Предприятие побывало в собственности у
        англичан, но развилось благодаря перекупившим его инженерам и
        предпринимателям братьям Струве в XIX веке.
      </MainText>
      {/* <MainImage image={main}/> */}
      <div>
        <CommonText>
          К 1930-м годам основной продукцией предприятия стали бандажи — съемные
          стальные профилированные кольца, надеваемые на обод железнодорожного
          колеса. В 1932 году на модернизацию производства было выделено 12 млн
          руб. В первые пятилетки на заводе работали мартеновские печи, были
          установлены новые нагревательные, термические печи и бандажепрокатный
          стан. Предприятие отливало сталь для судостроения, общего
          машиностроения, энергетики.
        </CommonText>
        <CommonText>
          Среди заказчиков Кулебакского металлургического завода были
          Горьковский автозавод, ДнепроГЭС, Беломорско-Балтийский канал и
          московское метро. В 1940 году на заводе был запущен новый термический
          цех, заменивший старые обжигательные мастерские. В начале 1940-х на
          Кулебакском металлургическом заводе модернизировали листопрокатный и
          сортопрокатный цехи, смонтировали новый слиткоразрезной пролет в
          бандажепрокатном цехе.
        </CommonText>
      </div>
      {/* <Gallery image={main}/> */}
    </div>
  )
}

export default Heritage
