import React from 'react'

import { Factory } from '../../components'
import {
  Mechanicians,
  WithoutThought,
  Locust,
  ArmoredCar,
  Сooperation,
  OnWheels,
  PatienceAndWork
} from './chapters'

import styles from './index.module.css'

const Drobmash = () => {
  return (
    <Factory>
      <div className={styles.root}>
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
