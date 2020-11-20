import React, { useRef } from 'react'
import Image from 'next/image'

import styles from './Img.module.css'

export default function Img () {
  const ImgRef = useRef()

  return (
    <figure className={styles.root}>
      <div className={styles.img}>
        <Image src="/images/drobmash/img.jpg" alt="QQ" layout="fill" ref={ImgRef} />
      </div>
    </figure>
  )
}
