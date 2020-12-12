import React from 'react'

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
