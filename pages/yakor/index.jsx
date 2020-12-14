import React from 'react'

import { Factory } from '../../components'
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
    </Factory>
  )
}

export default Yakor
