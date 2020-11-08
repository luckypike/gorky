import React, { useEffect, useRef } from 'react'
import lax from 'lax.js'
import Lax from '../components/Lax'

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

          <div className={styles.factories} ref={factoriesRef}>
            <div className={styles.placeholder} />
          </div>
        </div>
      </div>
    </Lax>
  )
}
