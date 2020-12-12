import React from 'react'

import { Factory } from '../../components'

import {
  Intro,
  OldestPlant,
  Reconstruction,
  BuildingTanks,
  Rubinchik,
  Reworking,
  Women,
  Ammunition,
  ShellsForKatyush,
  AfterWar
} from '../../components/Factories/Sormovo/Chapters'

export default function Sormovo () {
  return (
    <Factory>
      <Intro />

      <OldestPlant />

      <Reconstruction />

      <BuildingTanks />

      <Rubinchik />

      <Reworking />

      <Women />

      <Ammunition />

      <ShellsForKatyush />

      <AfterWar />
    </Factory>
  )
}
