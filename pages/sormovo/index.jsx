import React from 'react'

import { Factory } from '../../components'

import {
  Intro,
  Img,
  OldestPlant,
  Reconstruction,
  BuildingTanks,
  Rubinchik,
  Reworking,
  Women,
  Ammunition,
  ShellsForKatyush,
  AfterWar
} from '../../components/Factories/Sormovo/Chapters'

import styles from './index.module.css'

export default function Sormovo () {
  return (
    <Factory>
      <div className={styles.root}>
        <Intro />

        <Img />

        <OldestPlant />

        <Reconstruction />

        <BuildingTanks />

        <Rubinchik />

        <Reworking />

        <Women />

        <Ammunition />

        <ShellsForKatyush />

        <AfterWar />
      </div>
    </Factory>
  )
}
