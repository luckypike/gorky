import React from 'react'

import { Factory, NextFactory } from '../../components'
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

      <NextFactory
        href="/nmz"
        id="nmz"
        title="Горьковский машино­строительный Завод № 92 имени И. В. Сталина"
        desc="АО «Нижегородский машиностроительный завод»"
      />
    </Factory>
  )
}

export default Dzorg
