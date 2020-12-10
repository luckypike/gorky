import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Parallax from 'parallax-js'
import Link from 'next/link'

// import useStore from '../stores/useStore'

import styles from './index.module.css'

export default function Home () {
  // const appStore = useStore()

  const introRef = useRef()
  const prlxRef = useRef()

  useEffect(() => {
    prlxRef.current = new Parallax(introRef.current)

    return () => {
      prlxRef.current.destroy()
    }
  }, [])

  return (
    <div className={styles.root}>
      <div ref={introRef} className={styles.intro}>
        <div className={styles.text} data-depth="0.06">
          <div className={styles.name}>
            <span>Горький</span> символ победы
          </div>
        </div>
        <div className={styles.bg} data-depth="0.03">
          <div className={styles.bgin} />
        </div>
        <div className={styles.star} data-depth="0.025" />
      </div>

      <div className={styles.factories}>
        <div className={styles.section}>
          <div className={styles.ss}>
            <span>Боевые машины</span>
          </div>

          <div className={styles.items}>
            <Item
              href="/gaz"
              id="gaz"
              title="Государственный автомобильный завод имени В. М. Молотова"
              desc="ПАО ГАЗ, ООО «Автомобильный завод ГАЗ»"
              img={styles.i54}
              tIn={'elWidth / 5 * -1'}
              tOut={'elWidth / 8'}
            />

            <Item
              href="/sormovo"
              id="sormovo"
              title="Завод № 112 «Красное Сормово»"
              desc="ПАО «Завод “Красное Сормово”»"
              tIn={'elWidth / 8'}
              tOut={'elWidth / 8 * -1'}
              img={styles.i32}
            />

            <Item
              href="/etna"
              id="etna"
              title="ГОРЬКОВСКИЙ ЗАВОД «КРАСНАЯ ЭТНА»"
              desc="АО «Завод „Красная Этна“»"
              tIn={'elWidth / 4 * -1'}
              tOut={'elWidth / 6'}
            />

            <Item
              href="/drobmash"
              id="drobmash"
              title="ВЫКСУНСКИЙ ЗАВОД ДРОБИЛЬНО-РАЗМОЛЬНОГО ОБОРУДОВАНИЯ"
              desc="ЗАО «Дробмаш», АО «Завод корпусов»"
              img={styles.i54}
              tIn={'elWidth / 12'}
              tOut={'elWidth / 10 * -1'}
            />

            <Item
              href="/ruspolimet"
              id="ruspolimet"
              title="КУЛЕБАКСКИЙ МЕТАЛЛУРГИЧЕСКИЙ ЗАВОД"
              desc="ПАО «Русполимет»"
              img={styles.i54}
              tIn={'elWidth / 5 * -1'}
              tOut={'elWidth / 5'}
            />

            <Item
              href="/vmz"
              id="vmz"
              title="ВЫКСУНСКИЙ МЕТАЛЛУРГИЧЕСКИЙ ЗАВОД"
              desc="АО «Выксунский металлургический завод»"
              tIn={'elWidth / 12'}
              tOut={'elWidth / 10 * -1'}
            />

            <Item
              href="/gzhd"
              id="gzhd"
              img={styles.i54}
              title="ГОРЬКОВСКАЯ ЖЕЛЕЗНАЯ ДОРОГА"
              desc="Горьковская железная дорога — филиал ОАО РЖД"
              tIn={'elWidth / 5 * -1'}
              tOut={'elWidth / 5'}
            />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.ss}>
            <span>Авиастроение</span>
          </div>

          <div className={styles.items}>
            <Item
              href="/sokol"
              id="sokol"
              img={styles.i54}
              title="ГОРЬКОВСКИЙ АВИА-
              СТРОИТЕЛЬНЫЙ ЗАВОД No 21
              ИМЕНИ С. ОРДЖОНИКИДЗЕ"
              desc="Нижегородский авиастроительный завод «Сокол» — филиал АО «РСК „МиГ“»"
              tIn={'elWidth / 5 * -1'}
              tOut={'elWidth / 8'}
            />

            <Item
              href="/gidromash"
              id="gidromash"
              img={styles.i32}
              title="ЗАВОД No 119
              ИМЕНИ Г. М. МАЛЕНКОВА"
              desc="НПАО «Гидромаш»"
              tIn={0}
              tOut={0}
            />

            <Item
              href="/teploobmennik"
              id="teploobmennik"
              img={styles.i32}
              title="ГОСУДАРСТВЕННЫЙ
              ЗАВОД No 469
              ИМЕНИ М. М. ГРОМОВА"
              desc="АО ПКО «Теплообменник»"
              tIn={'elWidth / 5 * -1'}
              tOut={'elWidth / 4'}
            />

            <Item
              href="/gidroagregat"
              id="gidroagregat"
              img={styles.i54}
              title="ПАВЛОВСКИЙ ЗАВОД No 467"
              desc="АО «Гидроагрегат»"
              tIn={0}
              tOut={0}
            />

            <Item
              href="/adcbsz"
              id="adcbsz"
              title="ГОРЬКОВСКИЙ МЕХАНИЗИРОВАННЫЙ СТЕКЛОЗАВОД
              ИМЕНИ М. ГОРЬКОГО"
              desc="ОАО «Эй Джи Си Борский стекольный завод»"
              tIn={'elWidth / 6 * -1'}
              tOut={'elWidth / 3'}
            />

            <Item
              href="/dzorg"
              id="dzorg"
              img={styles.i32}
              title="ДЗЕРЖИНСКИЙ
              ЗАВОД No 148 «РУЛОН»"
              desc="ОАО «Дзержинское оргстекло»"
              tIn={0}
              tOut={0}
            />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.ss}>
            <span>Артиллерия</span>
          </div>

          <div className={styles.items}>
            <Item
              href="/nmz"
              id="nmz"
              img={styles.i32}
              title="Горьковский машино­строительный Завод № 92 имени И. В. Сталина"
              desc="АО «Нижегородский машиностроительный завод»"
              tIn={'elWidth / 5 * -1'}
              tOut={'elWidth / 8'}
            />

            <Item
              href="/rumo"
              id="rumo"
              img={styles.i54}
              title="ГОРЬКОВСКИЙ ЗАВОД № 718 «ДВИГАТЕЛЬ РЕВОЛЮЦИИ»"
              desc="ОАО РУМО"
              tIn={0}
              tOut={0}
            />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.ss}>
            <span>Боеприпасы</span>
          </div>

          <div className={styles.items}>
            <Item
              href="/sverdlov"
              id="sverdlov"
              img={styles.i32}
              title="ДЗЕРЖИНСКИЙ ЗАВОД № 80 ИМЕНИ Я. М. СВЕРДЛОВА"
              desc="ФКП «Завод имени Я. М. Свердлова»"
              tIn={'elWidth / 5 * -1'}
              tOut={'elWidth / 8'}
            />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.ss}>
            <span>Судостроение</span>
          </div>

          <div className={styles.items}>
            <Item
              href="/sormovo_sudo"
              id="sormovo_sudo"
              img={styles.i32}
              title="Горьковский Завод № 112 «Красное Сормово»"
              desc="ПАО «Завод „Красное Сормово“»"
              tIn={'elWidth / 5 * -1'}
              tOut={'elWidth / 8'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Item.propTypes = {
  id: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.string,
  scroller: PropTypes.bool,
  tIn: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tOut: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

function Item ({ href, title, id, desc, img }) {
  return (
    <Link href={href}>
      <a className={cn([styles.item, styles[id]])}>
        <div className={cn(styles.image, img, styles[id])} />

        <div className={styles.dt}>
          <div className={styles.title}>{title}</div>

          <div className={styles.desc}>{desc}</div>
        </div>
      </a>
    </Link>
  )
}
