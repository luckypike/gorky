import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Echelons,
  Production,
  Fulfillments,
  Rush,
  Trajectory,
  Competitions,
  Victory
} from '../../components/Factories/Petrovsky/Chapters'

const Petrovsky = () => {
  return (
    <Factory>
      <Intro />

      <Echelons />

      <Production />

      <Fulfillments />

      <Rush />

      <Trajectory />

      <Competitions />

      <Victory />
    </Factory>
  )
}

export default Petrovsky
