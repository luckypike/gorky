import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../'

import styles from './Easier.module.css'

const Easier = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Легче и быстрее">
          <p>
            В 1943–1944 гг. все внимание и силы руководства завода были
            сосредоточены на унификации, упрощении конструкции агрегатов и на
            оптимизации самого производственного процесса. Стали организовывать
            сначала участки с замкнутым технологическим циклом обработки, а
            затем — поточные участки. Расстояния, на которые перемещались при
            обработке детали, уменьшились в разы. Перевод на поток позволил
            почти полностью исключить дефицит деталей и обеспечить строгое
            выполнение суточного графика сборочного цеха.
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/gidromash/9/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Выдающейся победой конструкторов и технологов стало изготовление
            унифицированных на 55% стоек и хвостовых костылей Ла-5 и Як-7.
            Выпуск общих деталей крупными партиями резко сократил потребность в
            оснастке и в целом упростил процесс производства и планирования.
          </p>

          <p>
            В 1944 году на смену хорошо отработанным шасси Ла-5 пришли
            взлетно-посадочные устройства усовершенствованной версии истребителя
            — Ла-7. Новый самолет — Як-9 — запустило в производство и КБ А. С.
            Яковлева. Освоить агрегат для этого истребителя оказалось непросто,
            и план остался невыполненным из-за нехватки персонала.
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/gidromash/9/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            В итоге фактически только за счет максимальной мобилизации
            внутренних ресурсов рост производительности труда в сравнении с 1943
            годом составил почти 20%.
          </p>

          <p>
            За год до победы наркомат отметил заслуги большой группы заводчан в
            успешном внедрении поточных методов значком «Отличник
            социалистического соревнования НКАП». Управленцы получили ордена и
            медали.
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/gidromash/9/3.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Easier
