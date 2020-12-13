import React from 'react'

import { Factory } from '../../components'
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
    </Factory>
  )
}

export default Frunze
