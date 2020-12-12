import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Img,
  Radiators,
  Road,
  Build,
  Personnel,
  Growth,
  Conveyor,
  PeacefulTime
} from '../../components/Factories/Teploobmennik/Chapters'

import styles from './index.module.css'

const Teploobmennik = () => {
  return (
    <Factory>
      <div className={styles.root}>
          <Intro />

          <Img />

          <Radiators />

          <Road />

          <Build />

          <Personnel />

          <Growth />

          <Conveyor />

          <PeacefulTime />
      </div>
    </Factory>
  )
}

export default Teploobmennik
