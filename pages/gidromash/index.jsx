import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  Coach,
  Goodbye,
  Beep,
  Impossible,
  Gorkovites,
  Quality,
  Easier,
  Achievements
} from '../../components/Factories/Gidromash/Chapters'

const Gidromash = () => {
  return (
    <Factory>
      <Intro />
      <Coach />
      <Goodbye />
      <Beep />
      <Impossible />
      <Gorkovites />
      <Quality />
      <Easier />
      <Achievements />

      <NextFactory
        href="/teploobmennik"
        id="teploobmennik"
        title="ГОСУДАРСТВЕННЫЙ ЗАВОД № 469ИМЕНИ М. М. ГРОМОВА"
        desc="АО ПКО «Теплообменник»"
      />
    </Factory>
  )
}

export default Gidromash
