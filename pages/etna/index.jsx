import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  CombatAttachment,
  GunsForBattle,
  SecondHome,
  MachinesAndPeople,
  Сreativity,
  AfterWar
} from '../../components/Factories/Etna/Chapters'

const Etna = () => {
  return (
    <Factory>
      <Intro />
      <CombatAttachment />
      <GunsForBattle />
      <SecondHome />
      <MachinesAndPeople />
      <Сreativity />
      <AfterWar />
    </Factory>
  )
}

export default Etna
