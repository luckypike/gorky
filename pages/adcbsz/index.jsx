import React, { useEffect } from 'react'

import useStore from '../../stores/useStore'
import { Factory } from '../../components'
import {
  Intro,
  Img,
  GlassGiant,
  Hardening,
  Tablets,
  Fuel,
  WomenFront,
  Glass
} from '../../components/Factories/Adcbsz/Chapters'

import styles from './index.module.css'

const Adcbsz = () => {
  const appStore = useStore()

  useEffect(() => {
    appStore.setDark(false)
  }, [appStore])

  return (
    <Factory>
      <div className={styles.root}>
          <Intro />

          <Img />

          <GlassGiant />

          <Hardening />

          <Tablets />

          <Fuel />

          <WomenFront />

          <Glass />
      </div>
    </Factory>
  )
}

export default Adcbsz
