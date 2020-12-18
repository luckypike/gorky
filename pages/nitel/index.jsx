import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  Enterprise,
  Dvina,
  Volga,
  Professions,
  Evacuation,
  FatalDate,
  PlantDestroyed,
  Record,
  WorkingLife,
  Smithy,
  Production,
  Director
} from '../../components/Factories/Nitel/Chapters'

const Nitel = () => {
  return (
    <Factory>
      <Intro />

      <Enterprise />

      <Dvina />

      <Volga />

      <Professions />

      <Evacuation />

      <FatalDate />

      <PlantDestroyed />

      <Record />

      <WorkingLife />

      <Smithy />

      <Production />

      <Director />

      <NextFactory
        href="/frunze"
        id="frunze"
        title="Горьковский Завод № 326 имени М. В. Фрунзе"
        desc="ПАО «Нижегородское НПО имени М. В. Фрунзе»"
      />
    </Factory>
  )
}

export default Nitel
