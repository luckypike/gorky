import React, { useEffect } from 'react'

import useStore from '../../stores/useStore'
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
  const appStore = useStore()

  useEffect(() => {
    appStore.setDark(false)
  }, [appStore])

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
