import React from 'react'

import { Factory } from '../../components'
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
    </Factory>
  )
}

export default Ruspolimet
