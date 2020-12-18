import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  Reliable,
  Rata,
  JuneHeroes,
  FightForSeries,
  Lavochkin,
  Lagg3,
  Powerful,
  Front,
  La5,
  RecordFlow,
  Agadzhanov,
  FriendlyGuys,
  La7,
  AfterWar
} from '../../components/Factories/Sokol/Chapters'

const Sokol = () => {
  return (
    <Factory>
      <Intro />
      <Reliable />
      <Rata />
      <JuneHeroes />
      <FightForSeries />
      <Lavochkin />
      <Lagg3 />
      <Powerful />
      <Front />
      <La5 />
      <RecordFlow />
      <Agadzhanov />
      <FriendlyGuys />
      <La7 />
      <AfterWar />

      <NextFactory
        href="/gidromash"
        id="gidromash"
        title="ЗАВОД № 119 ИМЕНИ Г. М. МАЛЕНКОВА"
        desc="НПАО «Гидромаш»"
      />
    </Factory>
  )
}

export default Sokol
