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
        {/* <div className={styles.intro}>
          <Intro />
        </div>

        <div className={styles.img}>
          <Img />
        </div> */}

        <div className={styles.oldest}>
          <OldestPlant />
        </div>

        <div className={styles.reconstruction}>
          <Reconstruction />
        </div>

        <div className={styles.building}>
          <BuildingTanks />
        </div>

        <div className={styles.rubinchik}>
          <Rubinchik />
        </div>

        <div className={styles.reworking}>
          <Reworking />
        </div>

        <div className={styles.women}>
          <Women />
        </div>

        <div className={styles.ammunition}>
          <Ammunition />
        </div>

        <div className={styles.shells}>
          <ShellsForKatyush />
        </div>

        <div className={styles.after}>
          <AfterWar />
        </div>

      </div>
    </Factory>
  )
}
