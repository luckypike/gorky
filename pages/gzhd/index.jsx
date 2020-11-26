import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Img,
  StrategicMove,
  Military,
  Faster,
  NewFrames,
  LocomotiveOfVictory,
  Fortresses,
  Feats,
  ExceptBread,
  Roads
} from '../../components/Factories/Gzhd/Chapters'

import styles from './index.module.css'

const Vmz = () => {
  return (
    <Factory>
      <div className={styles.root}>
        <div className={styles.intro}>
          <Intro />
        </div>

        <div className={styles.img}>
          <Img />
        </div>

        <div className={styles.strategicMove}>
          <StrategicMove />
        </div>

        <div className={styles.military}>
          <Military />
        </div>

        <div className={styles.faster}>
          <Faster />
        </div>

        <div className={styles.newFrames}>
          <NewFrames />
        </div>

        <div className={styles.locomotiveOfVictory}>
          <LocomotiveOfVictory />
        </div>

        <div className={styles.fortresses}>
          <Fortresses />
        </div>

        <div className={styles.feats}>
          <Feats />
        </div>

        <div className={styles.exceptBread}>
          <ExceptBread />
        </div>

        <div className={styles.roads}>
          <Roads />
        </div>
      </div>
    </Factory>
  )
}

export default Vmz
