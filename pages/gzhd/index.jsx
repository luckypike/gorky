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

const Gzhd = () => {
  return (
    <Factory>
      <div className={styles.root}>
        <Intro />

        <Img />

        <StrategicMove />

        <Military />

        <Faster />

        <NewFrames />

        <LocomotiveOfVictory />

        <Fortresses />

        <Feats />

        <ExceptBread />

        <Roads />
      </div>
    </Factory>
  )
}

export default Gzhd
