import React from 'react'

import { MainText } from '../../../../'

import styles from './Chemistry.module.css'

const Chemistry = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Химия мира">
          <p>
            После войны завод освоил оснащение боевых частей управляемых корабельных и зенитных ракет, управляемых
            реактивных снарядов и торпед для Военно-морского флота. Освоило предприятие и выпуск гражданской продукции —
            химии, пластмасс и изделий из них, металлической тары, а с 1956 года — стиральных машин «Ока». За выпуск
            продукции гражданского и военного назначения завод не раз удостаивался правительственных наград.
          </p>
        </MainText>
      </div>
    </div>
  )
}

export default Chemistry
