import React from 'react'

import { Factory, NextFactory } from '../../components'
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
      <NextFactory href="/etna" id="etna" title="ГОРЬКОВСКИЙ ЗАВОД «КРАСНАЯ ЭТНА»" desc="АО «Завод „Красная Этна“»" />
    </Factory>
  )
}

export default Vmz
