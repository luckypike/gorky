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

          if (event.deltaY >= 0 && event.deltaX >= 0) { offsetX = Math.max(event.deltaY, event.deltaX) }
          if (event.deltaY <= 0 && event.deltaX <= 0) { offsetX = Math.min(event.deltaY, event.deltaX) }

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
                  <div className={styles.ss}>
                    Боевые машины
                  </div>
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
                    tIn={'elWidth / 3 * -1'}
                    tOut={'elWidth / 5'}
                    scroller={scroller}
                  />

                  <Item
                    href="/drobmash"
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
                    title="КУЛЕБАКСКИЙ МЕТАЛЛУРГИЧЕСКИЙ ЗАВОД"
                    desc="ПАО «Русполимет»"
                    img={styles.i54}
                    tIn={'elWidth / 5'}
                    tOut={'elWidth / 5'}
                    scroller={scroller}
                  />

                  <Item
                    href="/drobmash"
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
                    title="ГОРЬКОВСКАЯ ЖЕЛЕЗНАЯ ДОРОГА"
                    desc="Горьковская железная дорога — филиал ОАО РЖД"
                    tIn={'elWidth / 5'}
                    tOut={'elWidth / 10'}
                    scroller={scroller}
                  />
                </div>
              </div>

              <div className={styles.items}>
                <div className={styles.section}>
                  <div className={styles.ss}>
                    Аваистроение
                  </div>
                </div>

                <div className={styles.g}>
                  <Item
                    href="/sokol"
                    title="ГОРЬКОВСКИЙ АВИА-
                    СТРОИТЕЛЬНЫЙ ЗАВОД No 21
                    ИМЕНИ С. ОРДЖОНИКИДЗЕ"
                    desc="Нижегородский авиастроительный завод «Сокол» — филиал АО «РСК „МиГ“»"
                    tIn={0}
                    tOut={0}
                    scroller={scroller}
                  />

                  <Item
                    href="/gidromash"
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
                    href="/"
                    title="ГОСУДАРСТВЕННЫЙ
                    ЗАВОД No 469
                    ИМЕНИ М. М. ГРОМОВА"
                    desc="АО ПКО «Теплообменник»"
                    tIn={0}
                    tOut={0}
                    scroller={scroller}
                  />

                  <Item
                    href="/"
                    title="ПАВЛОВСКИЙ ЗАВОД No 467"
                    desc="АО «Гидроагрегат»"
                    tIn={0}
                    tOut={0}
                    scroller={scroller}
                  />
                </div>

                <div className={styles.g}>
                  <Item
                    href="/"
                    title="ГОРЬКОВСКИЙ МЕХАНИЗИРОВАННЫЙ СТЕКЛОЗАВОД
                    ИМЕНИ М. ГОРЬКОГО"
                    desc="ОАО «Эй Джи Си Борский стекольный завод»"
                    tIn={0}
                    tOut={0}
                    scroller={scroller}
                  />

                  <Item
                    href="/"
                    title="ДЗЕРЖИНСКИЙ
                    ЗАВОД No 148 «РУЛОН»"
                    desc="ОАО «Дзержинское оргстекло»"
                    tIn={0}
                    tOut={0}
                    scroller={scroller}
                  />
                </div>
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
  tIn: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  tOut: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
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
          <div className={styles.title}>
            {title}
          </div>

          <div className={styles.desc}>
            {desc}
          </div>
        </div>
      </a>
    </Link>
  )
}
