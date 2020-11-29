import React, { useEffect } from 'react'

import useStore from '../../stores/useStore'
import { Factory } from '../../components'

import {
  Intro,
  Img1,
  USSRAuto,
  FirstYears,
  Conveyor,
  Passability,
  Loskutov,
  Lipgart,
  FirstBombing,
  OneAndHalf,
  Defense,
  CityUnderAttack,
  IsALive,
  Victory
} from '../../components/Factories/Gaz/Chapters'

import styles from './index.module.css'

const Gaz = () => {
  const appStore = useStore()

  useEffect(() => {
    appStore.setDark(false)
  }, [appStore])

  return (
    <Factory>
      <div className={styles.root}>
          <Intro />

          <Img1 />

          <USSRAuto />

          <FirstYears />

          <Conveyor />

          <Passability />

          <Loskutov />

          <Lipgart />

          <FirstBombing />

          <OneAndHalf />

          <Defense />

          <CityUnderAttack />

          <IsALive />

          <Victory />
      </div>
    </Factory>
  )
}

export default Gaz
