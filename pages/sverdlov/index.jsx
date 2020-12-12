import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Img,
  Gigant,
  Ammunition,
  Mobilization,
  Chair,
  Explosive,
  Chemistry
} from '../../components/Factories/Sverdlov/Chapters'

import styles from './index.module.css'

const Sverdlov = () => {
  return (
    <Factory>
      <div className={styles.root}>
        <Intro />

        <Img />

        <Gigant />

        <Ammunition />

        <Mobilization />

        <Chair />

        <Explosive />

        <Chemistry />
      </div>
    </Factory>
  )
}

export default Sverdlov
