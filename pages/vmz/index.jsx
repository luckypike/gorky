import React, { useEffect } from 'react'

import useStore from '../../stores/useStore'
import { Factory } from '../../components'
import {
  Intro,
  Img,
  Modernization,
  Mobilization,
  Armor,
  Masters,
  CombatConditions,
  SteelMining,
  Defense,
  Character,
  PeacefulYears
} from '../../components/Factories/Vmz/Chapters'

import styles from './index.module.css'

const Vmz = () => {
  const appStore = useStore()

  useEffect(() => {
    appStore.setDark(false)
  }, [appStore])

  return (
    <Factory>
      <div className={styles.root}>
          <Intro />

          <Img />

          <Modernization />

          <Mobilization />

          <Armor />

          <Masters />

          <CombatConditions />

          <SteelMining />

          <Defense />

          <Character />

          <PeacefulYears />
      </div>
    </Factory>
  )
}

export default Vmz
