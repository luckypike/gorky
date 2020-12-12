import React from 'react'

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
