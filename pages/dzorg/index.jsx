import React, { useEffect } from 'react'

import useStore from '../../stores/useStore'
import { Factory } from '../../components'
import {
  Intro,
  Img,
  Unique,
  Backlog,
  United,
  Armor,
  Secrets,
  Zverev,
  FirstTime
} from '../../components/Factories/Dzorg/Chapters'

import styles from './index.module.css'

const Dzorg = () => {
  const appStore = useStore()

  useEffect(() => {
    appStore.setDark(false)
  }, [appStore])

  return (
    <Factory>
      <div className={styles.root}>
          <Intro />

          <Img />

          <Unique />

          <Backlog />

          <United />

          <Armor />

          <Secrets />

          <Zverev />

          <FirstTime />
      </div>
    </Factory>
  )
}

export default Dzorg
