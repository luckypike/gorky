import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, Columns } from '../../../../'

import styles from './Help.module.css'

const Help = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Помогали чем могли" />

        <Columns
          left={
            <div>
              <p>
                Быт работников завода был суров и соответствовал военному
                времени. Питание было довольно скудным, обед выдавался только в
                обмен на талон, вырезаемый из продуктовой карточки. Спасало то,
                что на территории предприятия было свое подсобное хозяйство и
                небольшие огороды, где коллектив выращивал овощи для себя и
                заводской столовой.
              </p>
              <p>
                Те, кто перевыполнял норму и справлялся со срочными заданиями,
                получали «стахановские талоны», по которым обед отпускался без
                продуктовой карточки со сверхнормой хлеба в 100 г. Была
                организована помощь семьям заводчан, ушедших на фронт. Им
                помогали доставать самое необходимое: продукты, мыло и дрова.
              </p>
            </div>
          }
          right={
            <div>
              <figure className={classNames(styles.img, styles.main)}>
                <Image src="/images/frunze/8/1.jpg" layout="fill" />
              </figure>
            </div>
          }
        />
      </div>
    </div>
  )
}

export default Help
