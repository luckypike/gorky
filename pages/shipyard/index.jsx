import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  Before,
  Crossing
} from '../../components/Factories/Shipyard/Chapters'

const Shipyard = () => {
  return (
    <Factory>
      <Intro />
      <Before />
      <Crossing />

      <NextFactory
        href="/nitel"
        id="nitel"
        title="Горьковский Завод № 197 имени В. И. Ленина"
        desc="ПАО «Нижегородский телевизионный завод имени В. И. Ленина»"
      />
    </Factory>
  )
}

export default Shipyard
