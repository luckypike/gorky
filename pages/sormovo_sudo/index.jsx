import React from 'react'

import { Factory, NextFactory } from '../../components'
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

      <NextFactory
        href="/gsz"
        id="gsz"
        title="Городецкий механический завод"
        desc="ООО «Городецкий судоремонтный завод»"
      />
    </Factory>
  )
}

export default SormovoSudo
