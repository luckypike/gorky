import React, { useRef } from 'react'
import Image from 'next/image'
// import lax from 'lax.js'

import styles from './Img.module.css'

// import Img1 from '../../images/Img1.jpg'

export default function Img () {
  const ImgRef = useRef()

  return (
    <figure className={styles.root}>
      <div className={styles.img}>
        <Image src="/images/sormovo/Img.jpg" alt="QQ"  layout="fill" ref={ImgRef} />
      </div>
    </figure>
  )
}
