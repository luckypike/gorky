import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  Oldest,
  Rebuild,
  Part,
  Wave,
  Masking,
  Сalls,
  ReturnToPlace
} from '../../components/Factories/Rumo/Chapters'

const Rumo = () => {
  return (
    <Factory>
      <Intro />
      <Oldest />
      <Rebuild />
      <Part />
      <Wave />
      <Masking />
      <Сalls />
      <ReturnToPlace />

      <NextFactory
        href="/paz"
        id="paz"
        title="Павловский завод автотракторного инструмента имени А. А. Жданова"
        desc="ООО «Павловский автобусный завод»"
      />
    </Factory>
  )
}

export default Rumo
