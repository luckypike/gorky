import React from 'react'

import { Factory, NextFactory } from '../../components'

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

      <NextFactory
        href="/drobmash"
        title="ВЫКСУНСКИЙ ЗАВОД ДРОБИЛЬНО-РАЗМОЛЬНОГО ОБОРУДОВАНИЯ"
        desc="ЗАО «Дробмаш», АО «Завод корпусов»"
      />
    </Factory>
  )
}
