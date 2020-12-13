import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  New,
  Rotation,
  More,
  Screws,
  Personnel,
  Adaptation
} from '../../components/Factories/Gidroagregat/Chapters'

const Gidroagregat = () => {
  return (
    <Factory>
      <Intro />
      <New />
      <Rotation />
      <More />
      <Screws />
      <Personnel />
      <Adaptation />
    </Factory>
  )
}

export default Gidroagregat
