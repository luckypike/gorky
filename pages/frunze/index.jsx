import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  First,
  RP12,
  Release,
  Ears,
  Bombings,
  Help,
  Contribution,
  Destiny
} from '../../components/Factories/Frunze/Chapters'

const Frunze = () => {
  return (
    <Factory>
      <Intro />
      <First />
      <RP12 />
      <Release />
      <Ears />
      <Bombings />
      <Help />
      <Contribution />
      <Destiny />

      <NextFactory
        href="/petrovsky"
        id="petrovsky"
        title="Горьковский Завод № 215 имени Г. И. Петровского"
        desc="ПАО «Завод имени Г. И. Петровского»"
      />
    </Factory>
  )
}

export default Frunze
