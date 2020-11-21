import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import lax from 'lax.js'
import Lax from '../components/Lax'
import cn from 'classnames'
import Link from 'next/link'

import styles from './index.module.css'

export default function Home () {
  const overlayRef = useRef()
  const factoriesRef = useRef()
  const introRef = useRef()

  useEffect(() => {
    lax.addDriver('scrollY', () => window.scrollY)

    lax.addElement(overlayRef.current, {
      scrollY: {
        opacity: [
          [0, 'screenHeight / 5'],
          [0, 0.6]
        ]
      }
    })

    lax.addElement(factoriesRef.current, {
      scrollY: {
        opacity: [
          [0, 'screenHeight / 5'],
          [0, 1]
        ]
      }
    })

    lax.addElement(introRef.current, {
      scrollY: {
        opacity: [
          [0, 'screenHeight / 5'],
          [1, 0]
        ]
      }
    })
  }, [])

  const [selected, setSelected] = useState(false)

  return (
    <Lax>
      <div className={styles.container}>
        <div className={styles.root}>
          <div className={styles.main}>
            <div className={styles.introWrapper} ref={introRef}>
              <div className={styles.intro}>
                <div className={styles.gradient}>Горький</div>
                <div className={styles.under}>символ победы</div>
              </div>
            </div>

            <div className={styles.overlay} ref={overlayRef} />
          </div>

          <div className={cn(styles.factories, { [styles.selected]: selected })} ref={factoriesRef}>
            <Item
              setSelected={setSelected}
              href="/gaz"
              title="Государственный автомобильный завод имени В. М. Молотова"
              desc="ПАО ГАЗ, ООО «Автомобильный завод ГАЗ»"
            />

            <Item
              setSelected={setSelected}
              href="/sormovo"
              title="Завод № 112 «Красное Сормово»"
              desc="ПАО «Завод “Красное Сормово”»"
            />

          <Item
            href="/drobmash"
            title="Выксунский машиностроительный завод дробильно-размольного оборудования"
            desc="ЗАО «Дробмаш» и АО «Завод корпусов»"
            setSelected={setSelected}
          />

            <div className={styles.sep} />
          </div>
        </div>
      </div>
    </Lax>
  )
}

Item.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  setSelected: PropTypes.func
}

function Item ({ href, title, desc, setSelected }) {
  const [active, setActive] = useState(false)

  const handleMouseEnter = e => {
    setSelected(true)
    setActive(true)
  }

  const handleMouseLeave = e => {
    setSelected(false)
    setActive(false)
  }

  return (
    <div className={cn(styles.factory, { [styles.active]: active })}>
      <Link href={href}>
        <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className={styles.title}>
            {title}
          </div>

          <div className={styles.desc}>
            {desc}
          </div>
        </a>
      </Link>
    </div>
  )
}
