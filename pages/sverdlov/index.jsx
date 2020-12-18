import React from 'react'

import { Factory, NextFactory } from '../../components'
import {
  Intro,
  Gigant,
  Ammunition,
  Mobilization,
  Chair,
  Explosive,
  Chemistry
} from '../../components/Factories/Sverdlov/Chapters'

const Sverdlov = () => {
  return (
    <Factory>
      <Intro />
      <Gigant />
      <Ammunition />
      <Mobilization />
      <Chair />
      <Explosive />
      <Chemistry />

      <NextFactory
        href="/korund"
        id="korund"
        title="Чернореченский химический завод имени М. И. Калинина"
        desc="ООО «Корунд»"
      />
    </Factory>
  )
}

export default Sverdlov
