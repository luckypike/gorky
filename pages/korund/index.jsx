import React from 'react'

import { Factory } from '../../components'
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
    </Factory>
  )
}

export default Korund
