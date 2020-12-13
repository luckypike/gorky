import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Plant,
  Wars,
  Ten
} from '../../components/Factories/Termal/Chapters'

const Termal = () => {
  return (
    <Factory>
      <Intro />
      <Plant />
      <Wars />
      <Ten />
    </Factory>
  )
}

export default Termal
