import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Img,
  New,
  Rotation,
  More,
  Screws,
  Personnel,
  Adaptation
} from '../../components/Factories/Gidroagregat/Chapters'

import styles from './index.module.css'

const Gidroagregat = () => {
  return (
    <Factory>
      <div className={styles.root}>
          <Intro />

          <Img />

          <New />

          <Rotation />

          <More />

          <Screws />

          <Personnel />

          <Adaptation />
      </div>
    </Factory>
  )
}

export default Gidroagregat
