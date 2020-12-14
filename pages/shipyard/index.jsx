import React from 'react'

import { Factory } from '../../components'
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
    </Factory>
  )
}

export default Shipyard
