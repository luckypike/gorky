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
        <Intro />

        <Img />

        <Heritage />

        <LastMorning />

        <ForYourself />

        <Magicians />

        <SpecialOrder />

        <TankConstruction />

        <PeacefulSky />
      </div>
    </Factory>
  )
}

export default Ruspolimet
