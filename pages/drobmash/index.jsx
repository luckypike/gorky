import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  Mechanicians,
  WithoutThought,
  Locust,
  ArmoredCar,
  Сooperation,
  OnWheels,
  PatienceAndWork,
  Change,
  Weapons,
  World
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
      <Change />
      <Weapons />
      <World />

      <NextFactory
        href="/ruspolimet"
        title="КУЛЕБАКСКИЙ МЕТАЛЛУРГИЧЕСКИЙ ЗАВОД"
        desc="ПАО «Русполимет»"
      />
    </Factory>
  )
}

export default Drobmash
