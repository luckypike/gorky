import React, { useEffect } from 'react'

import useStore from '../../stores/useStore'
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
  const appStore = useStore()

  useEffect(() => {
    appStore.setDark(false)
  }, [appStore])

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
