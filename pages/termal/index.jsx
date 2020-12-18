import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  Plant,
  Wars,
  Ten
} from '../../components/Factories/Termal/Chapters'

const Termal = () => {
  return (
    <Factory>
      <Intro />
      <Plant />
      <Wars />
      <Ten />

      <NextFactory
        href="/shipyard"
        id="shipyard"
        title="Мордовщиковский судомостостроительный завод № 342"
        desc="АО «Окская судоверфь»"
      />
    </Factory>
  )
}

export default Termal
