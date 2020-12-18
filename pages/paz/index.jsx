import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  Satellite,
  Winter,
  Heroes,
  Birth
} from '../../components/Factories/Paz/Chapters'

const Paz = () => {
  return (
    <Factory>
      <Intro />

      <Satellite />

      <Winter />

      <Heroes />

      <Birth />

      <NextFactory
        href="/zfs"
        id="zfs"
        title="Горьковский Завод фрезерных станков № 113"
        desc="ЗАО «Завод фрезерных станков»"
      />
    </Factory>
  )
}

export default Paz
