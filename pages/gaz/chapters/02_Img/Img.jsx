import React, { useRef } from 'react'

import styles from './Img.module.css'

// import Img1 from '../../images/Img1.jpg'

export default function Img () {
  const ImgRef = useRef()

  return (
    <figure className={styles.root}>
      <div className={styles.img1} ref={ImgRef}>
        {/* <img src={Img1} /> */}
      </div>
    </figure>
  )
}
