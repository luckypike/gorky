import React from 'react'

import { Factory } from '../../components'
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
    </Factory>
  )
}

export default Gidromash
