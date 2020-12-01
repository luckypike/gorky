import React, { useEffect } from 'react'

import useStore from '../../stores/useStore'
import { Factory } from '../../components'
import {
  Intro,
  Img,
  Heritage,
  LastMorning,
  ForYourself,
  Magicians,
  SpecialOrder,
  TankConstruction,
  PeacefulSky
} from '../../components/Factories/Ruspolimet/Chapters'

import styles from './index.module.css'

const Ruspolimet = () => {
  const appStore = useStore()

  useEffect(() => {
    appStore.setDark(false)
  }, [appStore])

  return (
    <Factory>
      <div className={styles.root}>
        <Intro />

        <Img />

        <Heritage />

        <LastMorning />

        <ForYourself />

        <Magicians />

        <SpecialOrder />

        <TankConstruction />

        <PeacefulSky />
      </div>
    </Factory>
  )
}

export default Ruspolimet
