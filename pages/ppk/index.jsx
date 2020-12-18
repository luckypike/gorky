import React from 'react'

import { Factory, NextFactory } from '../../components'
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

      <NextFactory
        href="/termal"
        id="termal"
        title="Завод № 645 имени В. И. Ульянова"
        desc="ЗАО «Концерн „Термаль“»"
      />
    </Factory>
  )
}

export default Ppk
