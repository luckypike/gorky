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
} from './chapters'

import styles from './index.module.css'

const Drobmash = () => {
  return (
    <Factory>
      <div className={styles.root}>
        <div className={styles.intro}>
          <Intro />
        </div>

        <div className={styles.img}>
          <Img />
        </div>

        <div className={styles.mechanicians}>
          <Mechanicians />
        </div>

        <div className={styles.without}>
          <WithoutThought />
        </div>

        <div className={styles.locust}>
          <Locust />
        </div>

        <div className={styles.armoredCar}>
          <ArmoredCar />
        </div>

        <div className={styles.cooperation}>
          <Сooperation />
        </div>

        <div className={styles.onWheels}>
          <OnWheels />
        </div>

        <div className={styles.patience}>
          <PatienceAndWork />
        </div>
      </div>
    </Factory>
  )
}

export default Drobmash
