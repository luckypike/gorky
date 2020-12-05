import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../'

import styles from './Radiators.module.css'

const Radiators = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="От парашютов к радиаторам">
          <p>
            Основанный в 1869 году в селе Солнечная Гора (позднее —
            Солнечногорск Московской области) как самоткацкая бумажная фабрика,
            в предвоенные годы завод специализировался на производстве
            спасательных и грузовых парашютов. В 1939 году предприятию было
            присвоено имя летчика Героя Советского Союза М.М. Громова.
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/teploobmennik/3/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            В конце 1940 года солнечногорская фабрика была передана в ведение
            Народного комиссариата авиационной промышленности СССР, заводу был
            присвоен № 469. В апреле 1941 года предприятие начало осваивать
            новое производство — выпуск радиаторов для авиационных двигателей.
            Свой опыт, приспособления, техническую документацию и чертежи на
            солнечногорский завод передавали специалисты московского завода № 34
            (сейчас — ПАО «Научно-производственное объединение „Наука“»), на
            котором радиаторы для авиационной промышленности начали выпускаться
            с 1934 года.
          </p>
        </CommonText>
      </div>
    </div>
  )
}

export default Radiators
