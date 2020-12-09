import React from 'react'

import { Factory } from '../../components'

import {
  Intro,
  USSRAuto,
  FirstYears,
  Conveyor,
  Passability,
  Loskutov,
  Lipgart,
  FirstBombing,
  OneAndHalf,
  Defense,
  CityUnderAttack,
  IsALive,
  Victory
} from '../../components/Factories/Gaz/Chapters'

const Gaz = () => {
  return (
    <Factory>
      <Intro />

      <USSRAuto />

      <FirstYears />

      <Conveyor />

      <Passability />

      <Loskutov />

      <Lipgart />

      <FirstBombing />

      <OneAndHalf />

      <Defense />

      <CityUnderAttack />

      <IsALive />

      <Victory />
    </Factory>
  )
}

export default Gaz
