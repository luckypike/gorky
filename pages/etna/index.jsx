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
} from './chapters'

import styles from './index.module.css'

const Etna = () => {
  return (
    <Factory>
      <div className={styles.root}>
        <div className={styles.intro}>
          <Intro />
        </div>

        <div className={styles.img}>
          <Img />
        </div>

        <div className={styles.combat}>
          <CombatAttachment />
        </div>

        <div className={styles.guns}>
          <GunsForBattle />
        </div>

        <div className={styles.second}>
          <SecondHome />
        </div>

        <div className={styles.machines}>
          <MachinesAndPeople />
        </div>

        <div className={styles.creativity}>
          <Сreativity />
        </div>

        <div className={styles.after}>
          <AfterWar />
        </div>

      </div>
    </Factory>
  )
}

export default Etna
