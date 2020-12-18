import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  Ssk
} from '../../components/Factories/Ssk/Chapters'

const Yakor = () => {
  return (
    <Factory>
      <Intro />
      <Ssk />

      <NextFactory
        href="/ppk"
        id="ppk"
        title="Судоремонтный завод «Память Парижской Коммуны»"
        desc="АО «Судоремонтный завод „Память Парижской Коммуны“»"
      />
    </Factory>
  )
}

export default Yakor
