import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  Innovator,
  Chain,
  Ammunition,
  Amazons,
  Rationality,
  Force,
  Smithy
} from '../../components/Factories/Yakor/Chapters'

const Yakor = () => {
  return (
    <Factory>
      <Intro />
      <Innovator />
      <Chain />
      <Ammunition />
      <Amazons />
      <Rationality />
      <Force />
      <Smithy />

      <NextFactory
        href="/nmjk"
        id="nmjk"
        title="Горьковский жиркомбинат имени С. М. Кирова "
        desc="АО НМЖК"
      />
    </Factory>
  )
}

export default Yakor
