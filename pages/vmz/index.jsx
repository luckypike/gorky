import React from 'react'

import { Factory } from '../../components'
import {
  Modernization,
  Mobilization,
  Armor,
  Masters,
  CombatConditions,
  SteelMining,
  Defense,
  Character,
  PeacefulYears
} from './chapters'

import styles from './index.module.css'

const Vmz = () => {
  return (
    <Factory>
      <div className={styles.root}>
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
