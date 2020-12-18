import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  Birth,
  Center,
  Risk,
  Ks,
  Temperature,
  Awards,
  Plant
} from '../../components/Factories/Korund/Chapters'

const Korund = () => {
  return (
    <Factory>
      <Intro />
      <Birth />
      <Center />
      <Risk />
      <Ks />
      <Temperature />
      <Awards />
      <Plant />

      <NextFactory
        href="/yakor"
        id="yakor"
        title="Горьковский завод № 646 «Красный якорь»"
        desc="АО «Завод „Красный якорь“»"
      />
    </Factory>
  )
}

export default Korund
