import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Img,
  DayBefore,
  FirstFight,
  Submarines,
  Baby,
  Stalinici,
  Extends
} from '../../components/Factories/SormovoSudo/Chapters'

import styles from './index.module.css'

const SormovoSudo = () => {
  return (
    <Factory>
      <div className={styles.root}>
        <Intro />

        <Img />

        <DayBefore />

        <FirstFight />

        <Submarines />

        <Baby />

        <Stalinici />

        <Extends />
      </div>
    </Factory>
  )
}

export default SormovoSudo
