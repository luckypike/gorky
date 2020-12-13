import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Unique,
  Backlog,
  United,
  Armor,
  Secrets,
  Zverev,
  FirstTime
} from '../../components/Factories/Dzorg/Chapters'

const Dzorg = () => {
  return (
    <Factory>
      <Intro />
      <Unique />

      <Backlog />

      <United />

      <Armor />

      <Secrets />

      <Zverev />

      <FirstTime />
    </Factory>
  )
}

export default Dzorg
