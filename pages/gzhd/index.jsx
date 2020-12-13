import React from 'react'

import { Factory } from '../../components'
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
    </Factory>
  )
}

export default Gzhd
