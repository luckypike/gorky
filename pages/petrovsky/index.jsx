import React from 'react'
import Head from 'next/head'

import { Factory } from '../../components'
import {
  Intro,
  Echelons,
  Production,
  Fulfillments,
  Rush,
  Trajectory,
  Competitions,
  Victory
} from '../../components/Factories/Petrovsky/Chapters'

const Petrovsky = () => {
  return (
    <Factory>
      <Head>
        <title>
          Завод имени Г. И. Петровского
        </title>
      </Head>

      <Intro />

      <Echelons />

      <Production />

      <Fulfillments />

      <Rush />

      <Trajectory />

      <Competitions />

      <Victory />
    </Factory>
  )
}

export default Petrovsky
