import React from 'react'
import Head from 'next/head'
import useStore from '../../stores/useStore'

import { Factory, NextFactory } from '../../components'

import {
  Intro,
  OldestPlant,
  Reconstruction,
  BuildingTanks,
  Rubinchik,
  Reworking,
  Women,
  Ammunition,
  ShellsForKatyush,
  AfterWar
} from '../../components/Factories/Sormovo/Chapters'

export default function Sormovo () {
  const appStore = useStore()

  const title = 'Завод № 112 «Красное сормово»'
  const desc = '«Красное Сормово» — одно из старейших предприятий не только в Нижнем Новгороде, но и в России: завод основан в 1849 году'

  return (
    <Factory>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc}></meta>

        <meta property="og:url" content="/sormovo" key="ogurl" />
        <meta property="og:site_name" content={appStore.siteName} key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={desc} key="ogdesc" />
      </Head>

      <Intro />

      <OldestPlant />

      <Reconstruction />

      <BuildingTanks />

      <Rubinchik />

      <Reworking />

      <Women />

      <Ammunition />

      <ShellsForKatyush />

      <AfterWar />

      <NextFactory
        href="/drobmash"
        title="ВЫКСУНСКИЙ ЗАВОД ДРОБИЛЬНО-РАЗМОЛЬНОГО ОБОРУДОВАНИЯ"
        desc="ЗАО «Дробмаш», АО «Завод корпусов»"
      />
    </Factory>
  )
}
