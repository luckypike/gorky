import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
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

const Vmz = () => {
  return (
    <Factory>
      <Intro />
      <Modernization />
      <Mobilization />
      <Armor />
      <Masters />
      <CombatConditions />
      <SteelMining />
      <Defense />
      <Character />
      <PeacefulYears />
    </Factory>
  )
}

export default Vmz
