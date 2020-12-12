import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Img,
  CombatAttachment,
  GunsForBattle,
  SecondHome,
  MachinesAndPeople,
  Сreativity,
  AfterWar
} from '../../components/Factories/Etna/Chapters'

import styles from './index.module.css'

const Etna = () => {
  return (
    <Factory>
      <div className={styles.root}>
        <Intro />

        <Img />

        <CombatAttachment />

        <GunsForBattle />

        <SecondHome />

        <MachinesAndPeople />

        <Сreativity />

        <AfterWar />
      </div>
    </Factory>
  )
}

export default Etna
