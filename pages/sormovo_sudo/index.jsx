import React, { useEffect } from 'react'

import useStore from '../../stores/useStore'
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
  const appStore = useStore()

  useEffect(() => {
    appStore.setDark(false)
  }, [appStore])

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
