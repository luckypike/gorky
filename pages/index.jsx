import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import lax from 'lax.js'
// import Lax from '../components/Lax'
import cn from 'classnames'
import Link from 'next/link'

import useStore from '../stores/useStore'

import styles from './index.module.css'

export default function Home () {
  const appStore = useStore()

  useEffect(() => {
    appStore.setLaxInit()
  }, [])

  const laxInit = useMemo(() => {
    return appStore.laxInit
  }, [appStore.laxInit])

  useEffect(() => {
    if (laxInit) {
      console.log('WE ARE INIT')
    }
  }, [laxInit])

  // const overlayRef = useRef()
  // const factoriesRef = useRef()
  // const introRef = useRef()

  // useEffect(() => {
  //   lax.addDriver('scrollY', () => window.scrollY)

  //   lax.addElement(overlayRef.current, {
  //     scrollY: {
  //       opacity: [
  //         [0, 'screenHeight / 5'],
  //         [0, 0.6]
  //       ]
  //     }
  //   })

  //   lax.addElement(factoriesRef.current, {
  //     scrollY: {
  //       opacity: [
  //         [0, 'screenHeight / 5'],
  //         [0, 1]
  //       ]
  //     }
  //   })

  //   lax.addElement(introRef.current, {
  //     scrollY: {
  //       opacity: [
  //         [0, 'screenHeight / 5'],
  //         [1, 0]
  //       ]
  //     }
  //   })
  // }, [])

  return (
    <div className={styles.root}>

    </div>
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
