import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  DayBefore,
  FirstFight,
  Submarines,
  Baby,
  Stalinici,
  Extends
} from '../../components/Factories/SormovoSudo/Chapters'

const SormovoSudo = () => {
  return (
    <Factory>
      <Intro />
      <DayBefore />
      <FirstFight />
      <Submarines />
      <Baby />
      <Stalinici />
      <Extends />
    </Factory>
  )
}

export default SormovoSudo
