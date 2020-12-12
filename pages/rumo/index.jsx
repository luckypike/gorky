import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Img,
  Oldest,
  Rebuild,
  Part,
  Wave,
  Masking,
  Сalls,
  ReturnToPlace
} from '../../components/Factories/Rumo/Chapters'

import styles from './index.module.css'

const Rumo = () => {
  return (
    <Factory>
      <div className={styles.root}>
        <Intro />

        <Img />

        <Oldest />

        <Rebuild />

        <Part />

        <Wave />

        <Masking />

        <Сalls />

        <ReturnToPlace />
      </div>
    </Factory>
  )
}

export default Rumo
