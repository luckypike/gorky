import React from 'react'

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
