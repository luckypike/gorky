import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Mechanicians,
  WithoutThought,
  Locust,
  ArmoredCar,
  Сooperation,
  OnWheels,
  PatienceAndWork
} from '../../components/Factories/Drobmash/Chapters'

const Drobmash = () => {
  return (
    <Factory>
      <Intro />
      <Mechanicians />
      <WithoutThought />
      <Locust />
      <ArmoredCar />
      <Сooperation />
      <OnWheels />
      <PatienceAndWork />
    </Factory>
  )
}

export default Drobmash
