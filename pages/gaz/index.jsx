import React from 'react'

import { Factory, NextFactory } from '../../components'

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

      <NextFactory
        href="/sormovo"
        title="Завод № 112 «Красное Сормово»"
        desc="ПАО «Завод “Красное Сормово”»"
      />
    </Factory>
  )
}

export default Gaz
