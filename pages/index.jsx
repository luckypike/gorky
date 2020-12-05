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
          <div className={styles.items}>
            <div className={styles.g}>
              <Item
                href="/gaz"
                title="Государственный автомобильный завод имени В. М .Молотова"
                desc="ПАО ГАЗ, ООО «Автомобильный завод ГАЗ»"
                img={styles.i54}
              />

              <Item
                href="/sormovo"
                title="Завод № 112 «Красное Сормово»"
                desc="ПАО «Завод “Красное Сормово”»"
                // img={styles.i11}
              />
            </div>

            <div className={styles.g}>
              <Item
                href="/drobmash"
                title="Выксунский машиностроительный завод дробильно-размольного оборудования"
                desc="ЗАО «Дробмаш» и АО «Завод корпусов»"
                // img={styles.i11}
              />

              <Item
                href="/gaz"
                title="Государственный автомобильный завод имени В. М. Молотова"
                desc="ПАО ГАЗ, ООО «Автомобильный завод ГАЗ»"
                img={styles.i54}
              />
            </div>

            <div className={styles.g}>
              <Item
                href="/sormovo"
                title="Завод № 112 «Красное Сормово»"
                desc="ПАО «Завод “Красное Сормово”»"
              />

              <Item
                href="/drobmash"
                title="Выксунский машиностроительный завод дробильно-размольного оборудования"
                desc="ЗАО «Дробмаш» и АО «Завод корпусов»"
              />
            </div>

            <div className={styles.g}>
              <Item
                href="/gaz"
                title="Государственный автомобильный завод имени В. М. Молотова"
                desc="ПАО ГАЗ, ООО «Автомобильный завод ГАЗ»"
              />

              <Item
                href="/sormovo"
                title="Завод № 112 «Красное Сормово»"
                desc="ПАО «Завод “Красное Сормово”»"
              />
            </div>

            <div className={styles.g}>
              <Item
                href="/drobmash"
                title="Выксунский машиностроительный завод дробильно-размольного оборудования"
                desc="ЗАО «Дробмаш» и АО «Завод корпусов»"
              />
            </div>
          </div>

          <div className={styles.items}>
            <div className={styles.g}>
              <Item
                href="/sormovo"
                title="Завод № 112 «Красное Сормово»"
                desc="ПАО «Завод “Красное Сормово”»"
              />

              <Item
                href="/drobmash"
                title="Выксунский машиностроительный завод дробильно-размольного оборудования"
                desc="ЗАО «Дробмаш» и АО «Завод корпусов»"
              />
            </div>

            <div className={styles.g}>
              <Item
                href="/gaz"
                title="Государственный автомобильный завод имени В. М. Молотова"
                desc="ПАО ГАЗ, ООО «Автомобильный завод ГАЗ»"
              />

              <Item
                href="/sormovo"
                title="Завод № 112 «Красное Сормово»"
                desc="ПАО «Завод “Красное Сормово”»"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.items}>
        <Item
          href="/gaz"
          title="Государственный автомобильный завод имени В. М. Молотова"
          desc="ПАО ГАЗ, ООО «Автомобильный завод ГАЗ»"
        />

        <Item
          href="/sormovo"
          title="Завод № 112 «Красное Сормово»"
          desc="ПАО «Завод “Красное Сормово”»"
        />

        <Item
          href="/drobmash"
          title="Выксунский машиностроительный завод дробильно-размольного оборудования"
          desc="ЗАО «Дробмаш» и АО «Завод корпусов»"
        />
      </div> */}
    </div>
  )
}

Item.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.string
}

function Item ({ href, title, desc, img }) {
  return (
    <Link href={href} >
      <a className={styles.item}>
        <div className={cn(styles.image, img)} />

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
