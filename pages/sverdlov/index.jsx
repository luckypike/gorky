import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Gigant,
  Ammunition,
  Mobilization,
  Chair,
  Explosive,
  Chemistry
} from '../../components/Factories/Sverdlov/Chapters'

const Sverdlov = () => {
  return (
    <Factory>
      <Intro />
      <Gigant />
      <Ammunition />
      <Mobilization />
      <Chair />
      <Explosive />
      <Chemistry />
    </Factory>
  )
}

export default Sverdlov
