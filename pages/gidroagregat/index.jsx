import React from 'react'

import { Factory, NextFactory } from '../../components'
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

      <NextFactory
        href="/adcbsz"
        id="adcbsz"
        title="ГОРЬКОВСКИЙ МЕХАНИЗИРОВАННЫЙ СТЕКЛОЗАВОД
        ИМЕНИ М. ГОРЬКОГО"
        desc="ОАО «Эй Джи Си Борский стекольный завод»"
      />
    </Factory>
  )
}

export default Gidroagregat
