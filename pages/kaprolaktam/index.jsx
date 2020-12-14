import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Chemistry,
  Production,
  Weapon,
  Cooperation,
  Farewell
} from '../../components/Factories/Kaprolaktam/Chapters'

const Kaprolaktam = () => {
  return (
    <Factory>
      <Intro />
      <Chemistry />
      <Production />
      <Weapon />
      <Cooperation />
      <Farewell />
    </Factory>
  )
}

export default Kaprolaktam
