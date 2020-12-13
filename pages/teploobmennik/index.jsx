import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Radiators,
  Road,
  Build,
  Personnel,
  Growth,
  Conveyor,
  PeacefulTime
} from '../../components/Factories/Teploobmennik/Chapters'

const Teploobmennik = () => {
  return (
    <Factory>
      <Intro />
      <Radiators />
      <Road />
      <Build />
      <Personnel />
      <Growth />
      <Conveyor />
      <PeacefulTime />
    </Factory>
  )
}

export default Teploobmennik
