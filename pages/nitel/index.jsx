import React, { useEffect } from 'react'

import useStore from '../../stores/useStore'
import { Factory } from '../../components'
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
  const appStore = useStore()

  useEffect(() => {
    appStore.setDark(false)
  }, [appStore])

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
    </Factory>
  )
}

export default Nitel
