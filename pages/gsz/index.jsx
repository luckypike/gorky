import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  Gsz
} from '../../components/Factories/Gsz/Chapters'

const Korund = () => {
  return (
    <Factory>
      <Intro />
      <Gsz />

      <NextFactory
        href="/ssk"
        id="ssk"
        title="Городецкая судоверфь"
        desc="ПАО «Судоремонтно-судостроительная корпорация»"
      />
    </Factory>
  )
}

export default Korund
