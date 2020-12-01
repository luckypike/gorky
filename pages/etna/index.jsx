import React, { useEffect } from 'react'

import useStore from '../../stores/useStore'
import { Factory } from '../../components'
import {
  Intro,
  Img,
  CombatAttachment,
  GunsForBattle,
  SecondHome,
  MachinesAndPeople,
  Сreativity,
  AfterWar
} from '../../components/Factories/Etna/Chapters'

import styles from './index.module.css'

const Etna = () => {
  const appStore = useStore()

  useEffect(() => {
    appStore.setDark(false)
  }, [appStore])

  return (
    <Factory>
      <div className={styles.root}>
        <Intro />

        <Img />

        <CombatAttachment />

        <GunsForBattle />

        <SecondHome />

        <MachinesAndPeople />

        <Сreativity />

        <AfterWar />
      </div>
    </Factory>
  )
}

export default Etna
