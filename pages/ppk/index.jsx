import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Winter,
  Cars
} from '../../components/Factories/Ppk/Chapters'

const Ppk = () => {
  return (
    <Factory>
      <Intro />
      <Winter />
      <Cars />
    </Factory>
  )
}

export default Ppk
