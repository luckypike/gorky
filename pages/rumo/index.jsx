import React from 'react'

import { Factory } from '../../components'
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
    </Factory>
  )
}

export default Rumo
