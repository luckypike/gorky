import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  QuickStart,
  Grabin,
  F22,
  Itch,
  F34,
  ZIS2,
  ZIS3,
  Against,
  Economy,
  Rear,
  Victory
} from '../../components/Factories/Nmz/Chapters'

const Nmz = () => {
  return (
    <Factory>
      <Intro />
      <QuickStart />
      <Grabin />
      <F22 />
      <Itch />
      <F34 />
      <ZIS2 />
      <ZIS3 />
      <Against />
      <Economy />
      <Rear />
      <Victory />

      <NextFactory
        href="/rumo"
        id="rumo"
        title="ГОРЬКОВСКИЙ ЗАВОД № 718 «ДВИГАТЕЛЬ РЕВОЛЮЦИИ»"
        desc="ОАО РУМО"
      />
    </Factory>
  )
}

export default Nmz
