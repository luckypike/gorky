import React from 'react'

import { Factory, NextFactory } from '../../components'
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
      <NextFactory
        href="/gzhd"
        id="gzhd"
        title="ГОРЬКОВСКАЯ ЖЕЛЕЗНАЯ ДОРОГА"
        desc="Горьковская железная дорога — филиал ОАО РЖД"
      />
    </Factory>
  )
}

export default Etna
