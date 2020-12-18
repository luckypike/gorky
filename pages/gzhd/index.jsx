import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  StrategicMove,
  Military,
  Faster,
  NewFrames,
  LocomotiveOfVictory,
  Fortresses,
  Feats,
  ExceptBread,
  Roads
} from '../../components/Factories/Gzhd/Chapters'

const Gzhd = () => {
  return (
    <Factory>
      <Intro />
      <StrategicMove />
      <Military />
      <Faster />
      <NewFrames />
      <LocomotiveOfVictory />
      <Fortresses />
      <Feats />
      <ExceptBread />
      <Roads />
      <NextFactory
        href="/sokol"
        title="ГОРЬКОВСКИЙ АВИАСТРОИТЕЛЬНЫЙ ЗАВОД № 21
        ИМЕНИ С. ОРДЖОНИКИДЗЕ"
        desc="Нижегородский авиастроительный завод «Сокол» — филиал АО «РСК „МиГ“»"
      />
    </Factory>
  )
}

export default Gzhd
