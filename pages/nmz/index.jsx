import React, { useEffect } from 'react'

import useStore from '../../stores/useStore'
import { Factory } from '../../components'
import {
  Intro,
  Img,
  QuickStart,
  Grabin,
  F22,
  Itch,
  F34,
  ZIS2,
  ZIS3,
  Against,
  Economy,
  Rear,
  Victory
} from '../../components/Factories/Nmz/Chapters'

import styles from './index.module.css'

const Nmz = () => {
  const appStore = useStore()

  useEffect(() => {
    appStore.setDark(false)
  }, [appStore])

  return (
    <Factory>
      <div className={styles.root}>
        <Intro />

        <Img />

        <QuickStart />

        <Grabin />

        <F22 />

        <Itch />

        <F34 />

        <ZIS2 />

        <ZIS3 />

        <Against />

        <Economy />

        <Rear />

        <Victory />
      </div>
    </Factory>
  )
}

export default Nmz
