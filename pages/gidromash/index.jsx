import React, { useEffect } from 'react'

import useStore from '../../stores/useStore'
import { Factory } from '../../components'
import {
  Intro,
  Img,
  Coach,
  Goodbye,
  Beep,
  Impossible,
  Gorkovites,
  Quality,
  Easier,
  Achievements
} from '../../components/Factories/Gidromash/Chapters'

import styles from './index.module.css'

const Gidromash = () => {
  const appStore = useStore()

  useEffect(() => {
    appStore.setDark(false)
  }, [appStore])

  return (
    <Factory>
      <div className={styles.root}>
          <Intro />

          <Img />

          <Coach />

          <Goodbye />

          <Beep />

          <Impossible />

          <Gorkovites />

          <Quality />

          <Easier />

          <Achievements />
      </div>
    </Factory>
  )
}

export default Gidromash
