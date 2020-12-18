import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  Mine,
  Benefit,
  Chain,
  Cartridges,
  Katyusha,
  BM8,
  More,
  We
} from '../../components/Factories/Zfs/Chapters'

const Zfs = () => {
  return (
    <Factory>
      <Intro />

      <Mine />

      <Benefit />

      <Chain />

      <Cartridges />

      <Katyusha />

      <BM8 />

      <More />

      <We />

      <NextFactory
        href="/sverdlov"
        id="sverdlov"
        title="ДЗЕРЖИНСКИЙ ЗАВОД № 80 ИМЕНИ Я. М. СВЕРДЛОВА"
        desc="ФКП «Завод имени Я. М. Свердлова»"
      />
    </Factory>
  )
}

export default Zfs
