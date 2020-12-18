import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  GlassGiant,
  Hardening,
  Tablets,
  Fuel,
  WomenFront,
  Glass
} from '../../components/Factories/Adcbsz/Chapters'

const Adcbsz = () => {
  return (
    <Factory>
      <Intro />
      <GlassGiant />
      <Hardening />
      <Tablets />
      <Fuel />
      <WomenFront />
      <Glass />

      <NextFactory
        href="/dzorg"
        id="dzorg"
        title="ДЗЕРЖИНСКИЙ
        ЗАВОД № 148 «РУЛОН»"
        desc="ОАО «Дзержинское оргстекло»"
      />
    </Factory>
  )
}

export default Adcbsz
