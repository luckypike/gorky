import React from 'react'

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
