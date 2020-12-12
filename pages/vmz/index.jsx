import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Img,
  Modernization,
  Mobilization,
  Armor,
  Masters,
  CombatConditions,
  SteelMining,
  Defense,
  Character,
  PeacefulYears
} from '../../components/Factories/Vmz/Chapters'

import styles from './index.module.css'

const Vmz = () => {
  return (
    <Factory>
      <div className={styles.root}>
          <Intro />

          <Img />

          <Modernization />

          <Mobilization />

          <Armor />

          <Masters />

          <CombatConditions />

          <SteelMining />

          <Defense />

          <Character />

          <PeacefulYears />
      </div>
    </Factory>
  )
}

export default Vmz
