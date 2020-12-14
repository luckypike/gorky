import React, { useEffect, useRef, useState } from 'react'
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
        <div className={styles.text}>
          <div className={styles.name}>
            <span>Горький</span> символ победы
          </div>
        </div>
        <div className={styles.bg} data-depth="0.04">
          <div className={styles.bgin} />
        </div>
        <div className={styles.star} data-depth="0.02" />
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
              delay={300}
            />

            <Item
              href="/sormovo"
              id="sormovo"
              title="Завод № 112 «Красное Сормово»"
              desc="ПАО «Завод “Красное Сормово”»"
              delay={300}
            />

            <Item
              href="/etna"
              id="etna"
              title="ГОРЬКОВСКИЙ ЗАВОД «КРАСНАЯ ЭТНА»"
              desc="АО «Завод „Красная Этна“»"
            />

            <Item
              href="/drobmash"
              id="drobmash"
              title="ВЫКСУНСКИЙ ЗАВОД ДРОБИЛЬНО-РАЗМОЛЬНОГО ОБОРУДОВАНИЯ"
              desc="ЗАО «Дробмаш», АО «Завод корпусов»"
            />

            <Item
              href="/ruspolimet"
              id="ruspolimet"
              title="КУЛЕБАКСКИЙ МЕТАЛЛУРГИЧЕСКИЙ ЗАВОД"
              desc="ПАО «Русполимет»"
            />

            <Item
              href="/vmz"
              id="vmz"
              title="ВЫКСУНСКИЙ МЕТАЛЛУРГИЧЕСКИЙ ЗАВОД"
              desc="АО «Выксунский металлургический завод»"
            />

            <Item
              href="/gzhd"
              id="gzhd"
              img={styles.i54}
              title="ГОРЬКОВСКАЯ ЖЕЛЕЗНАЯ ДОРОГА"
              desc="Горьковская железная дорога — филиал ОАО РЖД"
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
              title="ГОРЬКОВСКИЙ АВИА-
              СТРОИТЕЛЬНЫЙ ЗАВОД No 21
              ИМЕНИ С. ОРДЖОНИКИДЗЕ"
              desc="Нижегородский авиастроительный завод «Сокол» — филиал АО «РСК „МиГ“»"
            />

            <Item
              href="/gidromash"
              id="gidromash"
              title="ЗАВОД No 119
              ИМЕНИ Г. М. МАЛЕНКОВА"
              desc="НПАО «Гидромаш»"
            />

            <Item
              href="/teploobmennik"
              id="teploobmennik"
              img={styles.i32}
              title="ГОСУДАРСТВЕННЫЙ
              ЗАВОД No 469
              ИМЕНИ М. М. ГРОМОВА"
              desc="АО ПКО «Теплообменник»"
            />

            <Item
              href="/gidroagregat"
              id="gidroagregat"
              img={styles.i54}
              title="ПАВЛОВСКИЙ ЗАВОД No 467"
              desc="АО «Гидроагрегат»"
            />

            <Item
              href="/adcbsz"
              id="adcbsz"
              title="ГОРЬКОВСКИЙ МЕХАНИЗИРОВАННЫЙ СТЕКЛОЗАВОД
              ИМЕНИ М. ГОРЬКОГО"
              desc="ОАО «Эй Джи Си Борский стекольный завод»"
            />

            <Item
              href="/dzorg"
              id="dzorg"
              img={styles.i32}
              title="ДЗЕРЖИНСКИЙ
              ЗАВОД No 148 «РУЛОН»"
              desc="ОАО «Дзержинское оргстекло»"
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
            />

            <Item
              href="/rumo"
              id="rumo"
              img={styles.i54}
              title="ГОРЬКОВСКИЙ ЗАВОД № 718 «ДВИГАТЕЛЬ РЕВОЛЮЦИИ»"
              desc="ОАО РУМО"
            />

            <Item
              href="/paz"
              id="paz"
              img={styles.i54}
              title="Павловский завод автотракторного инструмента имени А. А. Жданова"
              desc="ООО «Павловский автобусный завод»"
            />

            <Item
              href="/zfs"
              id="zfs"
              img={styles.i54}
              title="Горьковский Завод фрезерных станков № 113"
              desc="ЗАО «Завод фрезерных станков»"
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
            />

            <Item
              href="/korund"
              id="korund"
              img={styles.i32}
              title="Чернореченский химический завод имени М. И. Калинина"
              desc="ООО «Корунд»"
            />

            <Item
              href="/yakor"
              id="yakor"
              img={styles.i32}
              title="Горьковский завод № 646 «Красный якорь»"
              desc="АО «Завод „Красный якорь“»"
            />

            <Item
              href="/nmjk"
              id="nmjk"
              img={styles.i32}
              title="Горьковский жиркомбинат имени С. М. Кирова "
              desc="АО НМЖК"
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
            />

            <Item
              href="/gsz"
              id="gsz"
              img={styles.i32}
              title="Городецкий механический завод"
              desc="ООО «Городецкий судоремонтный завод»"
            />

            <Item
              href="/termal"
              id="termal"
              img={styles.i32}
              title="Завод № 645 имени В. И. Ульянова"
              desc="ЗАО «Концерн „Термаль“»"
            />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.ss}>
            <span>Приборостроение</span>
          </div>

          <div className={styles.items}>
            <Item
              href="/nitel"
              id="nitel"
              img={styles.i32}
              title="Горьковский Завод № 197 имени В. И. Ленина"
              desc="ПАО «Нижегородский телевизионный завод имени В. И. Ленина»"
            />

            <Item
              href="/frunze"
              id="frunze"
              img={styles.i32}
              title="Горьковский Завод № 326 имени М. В. Фрунзе"
              desc="ПАО «Нижегородское НПО имени М. В. Фрунзе»"
            />

            <Item
              href="/petrovsky"
              id="petrovsky"
              img={styles.i32}
              title="Горьковский Завод № 215 имени Г. И. Петровского"
              desc="ПАО «Завод имени Г. И. Петровского»"
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
  const [delay, setDelay] = useState(0)
  const [duration, setDuration] = useState(500)

  useEffect(() => {
    setDelay((Math.round((Math.random() * 500 + 200) / 50) * 50).toString())
    setDuration((Math.round((Math.random() * 500 + 750) / 50) * 50).toString())
  }, [])

  return (
    <Link href={href}>
      <a className={cn([styles.item, styles[id]])} data-aos="fade-up" data-aos-delay={delay} data-aos-duration={duration}>
        <div className={cn(styles.image, img, styles[id])} />

        <div className={styles.dt}>
          <div className={styles.title}>{title} {delay}</div>

          <div className={styles.desc}>{desc}</div>
        </div>
      </a>
    </Link>
  )
}
