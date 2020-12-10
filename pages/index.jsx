import React, { useState, useEffect, useRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import lax from 'lax.js'
import ScrollBooster from 'scrollbooster'
// import Lax from '../components/Lax'
import cn from 'classnames'
import Link from 'next/link'

import useStore from '../stores/useStore'

import styles from './index.module.css'

export default function Home () {
  const appStore = useStore()
  const [scroller, setScroller] = useState()
  const xRef = useRef(0)

  useEffect(() => {
    lax.init()
    appStore.setLaxInit()
  }, [])

  const laxInit = useMemo(() => {
    return appStore.laxInit
  }, [appStore.laxInit])

  const factoriesRef = useRef()
  const contentRef = useRef()
  const SBRef = useRef()

  useEffect(() => {
    setScroller(window.getComputedStyle(factoriesRef.current).getPropertyValue('display') === 'flex')
  }, [])

  useEffect(() => {
    if (scroller === undefined || !laxInit) return undefined

    if (scroller) {
      initScroller()

      lax.addDriver('scrollX', function () {
        return xRef.current
      })

      lax.addElement(contentRef.current, {
        scrollX: {
          opacity: [
            [0, 'screenWidth / 4'],
            [0, 1]
          ]
        }
      })
    } else {
      lax.addDriver('scrollY', () => window.scrollY)

      lax.addElement(contentRef.current, {
        scrollY: {
          opacity: [
            [0, 'screenHeight / 4'],
            [0, 1]
          ]
        }
      })
    }
  }, [scroller, laxInit])

  useEffect(() => {
    return () => {
      destroyScroller()
    }
  }, [])

  const destroyScroller = () => {
    if (SBRef.current) {
      console.log('REMOVE SCROLLER')
      SBRef.current.destroy()
      SBRef.current = undefined
    }
  }

  const initScroller = () => {
    if (!SBRef.current) {
      SBRef.current = new ScrollBooster({
        viewport: contentRef.current,
        content: factoriesRef.current,
        direction: 'horizontal',
        preventDefaultOnEmulateScroll: 'horizontal',
        dragDirectionTolerance: 0,
        emulateScroll: true,
        scrollMode: 'transform',
        onUpdate: (state) => {
          xRef.current = state.position.x
        },
        onWheel: (state, event) => {
          let offsetX = 0

          if (event.deltaY >= 0 && event.deltaX >= 0) {
            offsetX = Math.max(event.deltaY, event.deltaX)
          }
          if (event.deltaY <= 0 && event.deltaX <= 0) {
            offsetX = Math.min(event.deltaY, event.deltaX)
          }

          SBRef.current.scrollOffset.x = -offsetX / 1.5
          SBRef.current.scrollOffset.y = -event.deltaY / 1.5
        }
      })
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.intro}>
        <div className={styles.name}>
          <span>Горький</span> символ победы
        </div>
      </div>

      <div className={styles.content} ref={contentRef}>
        <div className={styles.factories} ref={factoriesRef}>
          {laxInit && (
            <>
              <div className={styles.items}>
                <div className={styles.section}>
                  <div className={styles.ss}>Боевые машины</div>
                </div>

                <div className={styles.g}>
                  <Item
                    href="/gaz"
                    id="gaz"
                    title="Государственный автомобильный завод имени В. М .Молотова"
                    desc="ПАО ГАЗ, ООО «Автомобильный завод ГАЗ»"
                    img={styles.i54}
                    tIn={'elWidth / 5 * -1'}
                    tOut={'elWidth / 8'}
                    scroller={scroller}
                  />

                  <Item
                    href="/sormovo"
                    id="sormovo"
                    title="Завод № 112 «Красное Сормово»"
                    desc="ПАО «Завод “Красное Сормово”»"
                    tIn={'elWidth / 8'}
                    tOut={'elWidth / 8 * -1'}
                    scroller={scroller}
                    img={styles.i32}
                  />
                </div>

                <div className={styles.g}>
                  <Item
                    href="/etna"
                    id="etna"
                    title="ГОРЬКОВСКИЙ ЗАВОД «КРАСНАЯ ЭТНА»"
                    desc="АО «Завод „Красная Этна“»"
                    tIn={'elWidth / 4 * -1'}
                    tOut={'elWidth / 6'}
                    scroller={scroller}
                  />

                  <Item
                    href="/drobmash"
                    id="drobmash"
                    title="ВЫКСУНСКИЙ ЗАВОД ДРОБИЛЬНО-РАЗМОЛЬНОГО ОБОРУДОВАНИЯ"
                    desc="ЗАО «Дробмаш», АО «Завод корпусов»"
                    img={styles.i54}
                    tIn={'elWidth / 12'}
                    tOut={'elWidth / 10 * -1'}
                    scroller={scroller}
                  />
                </div>

                <div className={styles.g}>
                  <Item
                    href="/ruspolimet"
                    id="ruspolimet"
                    title="КУЛЕБАКСКИЙ МЕТАЛЛУРГИЧЕСКИЙ ЗАВОД"
                    desc="ПАО «Русполимет»"
                    img={styles.i54}
                    tIn={'elWidth / 5 * -1'}
                    tOut={'elWidth / 5'}
                    scroller={scroller}
                  />

                  <Item
                    href="/vmz"
                    id="vmz"
                    title="ВЫКСУНСКИЙ МЕТАЛЛУРГИЧЕСКИЙ ЗАВОД"
                    desc="АО «Выксунский металлургический завод»"
                    tIn={'elWidth / 12'}
                    tOut={'elWidth / 10 * -1'}
                    scroller={scroller}
                  />
                </div>

                <div className={styles.g}>
                  <Item
                    href="/gzhd"
                    id="gzhd"
                    img={styles.i54}
                    title="ГОРЬКОВСКАЯ ЖЕЛЕЗНАЯ ДОРОГА"
                    desc="Горьковская железная дорога — филиал ОАО РЖД"
                    tIn={'elWidth / 5 * -1'}
                    tOut={'elWidth / 5'}
                    scroller={scroller}
                  />
                </div>
              </div>

              <div className={styles.items}>
                <div className={styles.section}>
                  <div className={styles.ss}>Авиастроение</div>
                </div>

                <div className={styles.g}>
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
                    scroller={scroller}
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
                    scroller={scroller}
                  />
                </div>

                <div className={styles.g}>
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
                    scroller={scroller}
                  />

                  <Item
                    href="/gidroagregat"
                    id="gidroagregat"
                    img={styles.i54}
                    title="ПАВЛОВСКИЙ ЗАВОД No 467"
                    desc="АО «Гидроагрегат»"
                    tIn={0}
                    tOut={0}
                    scroller={scroller}
                  />
                </div>

                <div className={styles.g}>
                  <Item
                    href="/adcbsz"
                    id="adcbsz"
                    title="ГОРЬКОВСКИЙ МЕХАНИЗИРОВАННЫЙ СТЕКЛОЗАВОД
                    ИМЕНИ М. ГОРЬКОГО"
                    desc="ОАО «Эй Джи Си Борский стекольный завод»"
                    tIn={'elWidth / 6 * -1'}
                    tOut={'elWidth / 3'}
                    scroller={scroller}
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
                    scroller={scroller}
                  />
                </div>
              </div>
              <div className={styles.items}>
                <div className={styles.section}>
                  <div className={styles.ss}>Артиллерия</div>
                </div>

                <Item
                  href="/nmz"
                  id="nmz"
                  img={styles.i32}
                  title="Горьковский машино­строительный Завод № 92 имени И. В. Сталина"
                  desc="АО «Нижегородский машиностроительный завод»"
                  tIn={'elWidth / 5 * -1'}
                  tOut={'elWidth / 8'}
                  scroller={scroller}
                />

                <div className={styles.g}>
                  <Item
                    href="/rumo"
                    id="rumo"
                    img={styles.i54}
                    title="ГОРЬКОВСКИЙ ЗАВОД № 718 «ДВИГАТЕЛЬ РЕВОЛЮЦИИ»"
                    desc="ОАО РУМО"
                    tIn={0}
                    tOut={0}
                    scroller={scroller}
                  />
                </div>
              </div>
              <div className={styles.items}>
                <div className={styles.section}>
                  <div className={styles.ss}>Боеприпасы</div>
                </div>

                <Item
                  href="/sverdlov"
                  id="sverdlov"
                  img={styles.i32}
                  title="ДЗЕРЖИНСКИЙ ЗАВОД № 80 ИМЕНИ Я. М. СВЕРДЛОВА"
                  desc="ФКП «Завод имени Я. М. Свердлова»"
                  tIn={'elWidth / 5 * -1'}
                  tOut={'elWidth / 8'}
                  scroller={scroller}
                />
              </div>
              <div className={styles.items}>
                <div className={styles.section}>
                  <div className={styles.ss}>Судостроение</div>
                </div>

                <Item
                  href="/sormovo_sudo"
                  id="sormovo_sudo"
                  img={styles.i32}
                  title="Горьковский Завод № 112 «Красное Сормово»"
                  desc="ПАО «Завод „Красное Сормово“»"
                  tIn={'elWidth / 5 * -1'}
                  tOut={'elWidth / 8'}
                  scroller={scroller}
                />
              </div>
            </>
          )}
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

function Item ({ href, title, id, desc, img, tIn, tOut, scroller }) {
  const roottRef = useRef()

  useEffect(() => {
    if (scroller) {
      lax.addElement(roottRef.current, {
        scrollX: {
          translateX: [
            ['elInX', 'elOutX'],
            [tIn, tOut],
            {
              inertia: 10
            }
          ]
        }
      })
    }
  }, [])

  return (
    <Link href={href}>
      <a className={cn([styles.item, styles[id]])} ref={roottRef}>
        <div className={cn(styles.image, img, styles[id])} />

        <div className={styles.dt}>
          <div className={styles.title}>{title}</div>

          <div className={styles.desc}>{desc}</div>
        </div>
      </a>
    </Link>
  )
}
