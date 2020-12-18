import React from 'react'

import { Factory, NextFactory } from '../../components'
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

      <NextFactory
        href="/gidroagregat"
        id="gidroagregat"
        title="ПАВЛОВСКИЙ ЗАВОД № 467"
        desc="АО «Гидроагрегат»"
      />
    </Factory>
  )
}

export default Teploobmennik
