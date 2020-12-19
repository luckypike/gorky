import React from 'react'
import Head from 'next/head'
import useStore from '../../stores/useStore'

import { Factory, NextFactory } from '../../components'

import {
  Intro,
  USSRAuto,
  FirstYears,
  Conveyor,
  Passability,
  Loskutov,
  Lipgart,
  FirstBombing,
  OneAndHalf,
  Defense,
  CityUnderAttack,
  IsALive,
  Victory
} from '../../components/Factories/Gaz/Chapters'

const Gaz = () => {
  const appStore = useStore()

  const title = 'Государственный автомобильный завод имени В. М. Молотова'
  const desc = 'История автомобильного завода берет начало в 1929 году, когда Ford Motor Company и СССР подписали соглашение о взаимодействии в организации массового производства машин'

  return (
    <Factory>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc}></meta>

        <meta property="og:url" content="/gaz" key="ogurl" />
        <meta property="og:site_name" content={appStore.siteName} key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={desc} key="ogdesc" />
      </Head>

      <Intro />

      <USSRAuto />

      <FirstYears />

      <Conveyor />

      <Passability />

      <Loskutov />

      <Lipgart />

      <FirstBombing />

      <OneAndHalf />

      <Defense />

      <CityUnderAttack />

      <IsALive />

      <Victory />

      <NextFactory
        href="/sormovo"
        title="Завод № 112 «Красное Сормово»"
        desc="ПАО «Завод “Красное Сормово”»"
      />
    </Factory>
  )
}

export default Gaz
