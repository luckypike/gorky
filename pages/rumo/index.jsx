import React, { useEffect } from 'react'

import useStore from '../../stores/useStore'
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
  const appStore = useStore()

  useEffect(() => {
    appStore.setDark(false)
  }, [appStore])

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
