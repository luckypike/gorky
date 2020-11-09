import React from 'react'

import {
  MainText,
  CommonText
} from '../../../../components'

import styles from './Mechanicians.module.css'

const Mechanicians = () => {
  return (
    <div className={styles.root}>
      <MainText title="Машиностроители в центре металлургии">
        Завод по производству дробильно-размольного оборудования (ДРО) в Выксе —
        крае, где традиционно развивалось металлургическое производство, решили
        строить в 1929 году. В 1931-м его планировалось ввести в эксплуатацию.
      </MainText>
      {/* <MainImage image={main}/> */}
      <div>
        <CommonText>
          Потребности в дробильно-размольном оборудовании были очень высокими: в
          стране шла индустриализация, строились сотни предприятий, а
          собственной техники для производства щебня и других строительных
          материалов почти не было — в основном она ввозилась из-за рубежа.
          Однако планы Главмашинстроя сорвала нехватка финансирования, рабочей
          силы, материалов и плохая организация работ. А в 1932 году стройку
          вовсе законсервировали по рекомендации Выксастроя, решившего, что
          завод будет нерентабельным. Если бы не усилия Горьковского обкома
          ВКП(б), заводу дробильно-размольных машин не суждено было появиться —
          по ходатайству местного комитета решение об отмене консервации приняла
          коллегия Наркомата тяжелого машиностроения под председательством Серго
          Орджоникидзе.
        </CommonText>
        <CommonText>
          Техническую помощь в строительстве завода и производстве первых машин
          оказывала германская фирма Friedrich Krupp AG — крупнейший
          промышленный концерн Германии, созданный в 1860 году,
          специализировался на добыче угля, производстве стали, военной и
          сельхозтехники, текстильного оборудования, судов, локомотивов. Немцами
          были главный инженер завода ДРО, главный механик, начальники
          технического отдела, конструкторского бюро и инструментального цеха. В
          марте 1933 года предприятие выпустило первую щековую дробилку Щ-3 под
          названием «Комсомолка» весом 4 т и производительностью 5 куб. м/час.
          В 1935 году было произведено уже 102 машины, в 1936-м начался выпуск
          мельниц и был изготовлен первый паро-воздушный молот, а в 1937-м
          самостоятельно спроектировано дробильно-размольное оборудование и
          позже освоено производство однокривошипных прессов.
        </CommonText>
      </div>
      {/* <Gallery image={main}/> */}
    </div>
  )
}

export default Mechanicians
