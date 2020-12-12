import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Satellite,
  Winter,
  Heroes,
  Birth
} from '../../components/Factories/Paz/Chapters'

const Paz = () => {
  return (
    <Factory>
      <Intro />

      <Satellite />

      <Winter />

      <Heroes />

      <Birth />
    </Factory>
  )
}

export default Paz
