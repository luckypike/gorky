import React, { useRef } from 'react'
import Image from 'next/image'

import styles from './Img.module.css'

const Img = () => {
  const ImgRef = useRef()

  return (
    <figure className={styles.root}>
      <div className={styles.img}>
        <Image src="/images/nmz/img.jpg" alt="QQ" layout="fill" ref={ImgRef} />
      </div>
    </figure>
  )
}

export default Img
