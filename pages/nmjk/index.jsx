import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  LikeClockwork,
  Largest,
  Products,
  InSoap,
  Expands
} from '../../components/Factories/Nmjk/Chapters'

const Nmjk = () => {
  return (
    <Factory>
      <Intro />
      <LikeClockwork />
      <Largest />
      <Products />
      <InSoap />
      <Expands />

      <NextFactory
        href="/kaprolaktam"
        id="kaprolaktam"
        title="Дзержинский Завод № 96"
        desc="ОАО «Капролактам» (ликвидировано)"
      />
    </Factory>
  )
}

export default Nmjk
