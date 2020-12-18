import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  Heritage,
  LastMorning,
  ForYourself,
  Magicians,
  SpecialOrder,
  TankConstruction,
  PeacefulSky
} from '../../components/Factories/Ruspolimet/Chapters'

const Ruspolimet = () => {
  return (
    <Factory>
      <Intro />
      <Heritage />
      <LastMorning />
      <ForYourself />
      <Magicians />
      <SpecialOrder />
      <TankConstruction />
      <PeacefulSky />

      <NextFactory
        href="/vmz"
        title="ВЫКСУНСКИЙ МЕТАЛЛУРГИЧЕСКИЙ ЗАВОД"
        desc="АО «Выксунский металлургический завод»"
      />
    </Factory>
  )
}

export default Ruspolimet
