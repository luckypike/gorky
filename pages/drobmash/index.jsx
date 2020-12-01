import React, { useEffect } from 'react'

import useStore from '../../stores/useStore'
import { Factory } from '../../components'
import {
  Intro,
  Img,
  Mechanicians,
  WithoutThought,
  Locust,
  ArmoredCar,
  Сooperation,
  OnWheels,
  PatienceAndWork
} from '../../components/Factories/Drobmash/Chapters'

import styles from './index.module.css'

const Drobmash = () => {
  const appStore = useStore()

  useEffect(() => {
    appStore.setDark(false)
  }, [appStore])

  return (
    <Factory>
      <div className={styles.root}>
        <Intro />

        <Img />

        <Mechanicians />

        <WithoutThought />

        <Locust />

        <ArmoredCar />

        <Сooperation />

        <OnWheels />

        <PatienceAndWork />
      </div>
    </Factory>
  )
}

export default Drobmash
