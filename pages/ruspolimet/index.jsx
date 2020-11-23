import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Img,
  Heritage,
  LastMorning,
  ForYourself,
  Magicians,
  SpecialOrder,
  TankConstruction,
  PeacefulSky
} from '../../components/Factories/Ruspolimet/Chapters'

import styles from './index.module.css'

const Ruspolimet = () => {
  return (
    <Factory>
      <div className={styles.root}>
        <div className={styles.intro}>
          <Intro />
        </div>

        <div className={styles.img}>
          <Img />
        </div>

        <div className={styles.heritage}>
          <Heritage />
        </div>

        <div className={styles.lastMorning}>
          <LastMorning />
        </div>

        <div className={styles.forYourself}>
          <ForYourself />
        </div>

        <div className={styles.magicians}>
          <Magicians />
        </div>

        <div className={styles.specialOrder}>
          <SpecialOrder />
        </div>

        <div className={styles.tankConstruction}>
          <TankConstruction />
        </div>

        <div className={styles.peacefulSky}>
          <PeacefulSky />
        </div>
      </div>
    </Factory>
  )
}

export default Ruspolimet
