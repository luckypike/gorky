import React, { useEffect, useState, useRef } from 'react'
import ScrollBooster from 'scrollbooster'
import PropTypes from 'prop-types'
import lax from 'lax.js'
import Link from 'next/link'

import styles from './Factory.module.css'

const Factory = ({ children }) => {
  const [scroller, setScroller] = useState(false)
  const xRef = useRef(0)

  const rootRef = useRef()
  const contentRef = useRef()
  const SBRef = useRef()

  const updateDimensions = () => {
    setScroller(
      window
        .getComputedStyle(contentRef.current)
        .getPropertyValue('display') === 'flex'
    )
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    updateDimensions()

    lax.addDriver('scrollX', function () {
      return xRef.current
    })

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  useEffect(() => {
    if (scroller && !SBRef.current) {
      SBRef.current = new ScrollBooster({
        viewport: rootRef.current,
        content: contentRef.current,
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

    if (!scroller && SBRef.current) {
      SBRef.current.destroy()
      SBRef.current = null
    }

    return () => {
      if (SBRef.current) {
        SBRef.current.destroy()
        SBRef.current = null
      }
    }
  }, [scroller])

  return (
    <div ref={rootRef} className={styles.root}>
      <Link href="/">
        <a className={styles.back}>
          <svg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 9.99992L9.73455 0L11.1776 1.48242L3.91661 8.94137H50V11.0378H3.89649L11.1776 18.5176L9.73454 20L0 9.99992Z"
              fill="#D63517"
            />
          </svg>

          <span className={styles.backText}>
            <span className={styles.rd}>ГОРЬКИЙ</span> СИМВОЛ ПОБЕДЫ
          </span>
        </a>
      </Link>

      <div ref={contentRef} className={styles.factory}>
        {children}
      </div>
    </div>
  )
}

Factory.propTypes = {
  children: PropTypes.node
}

export default Factory
