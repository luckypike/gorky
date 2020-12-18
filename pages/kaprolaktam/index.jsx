import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  Chemistry,
  Production,
  Weapon,
  Cooperation,
  Farewell
} from '../../components/Factories/Kaprolaktam/Chapters'

const Kaprolaktam = () => {
  return (
    <Factory>
      <Intro />
      <Chemistry />
      <Production />
      <Weapon />
      <Cooperation />
      <Farewell />

      <NextFactory
        href="/sormovo_sudo"
        id="sormovo_sudo"
        title="Горьковский Завод № 112 «Красное Сормово»"
        desc="ПАО «Завод „Красное Сормово“»"
      />
    </Factory>
  )
}

export default Kaprolaktam
