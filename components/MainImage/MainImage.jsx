import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import styles from './MainImage.module.css'

const MainImage = ({ image, caption }) => {
  const ImgRef = useRef()
  return (
    <div className={styles.root}>
      <figure
        style={{ backgroundImage: `url(${image})` }}
        ref={ImgRef}
      >
        {/* <img src={image} alt="img" /> */}
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </div>
  )
}

MainImage.propTypes = {
  image: PropTypes.string,
  caption: PropTypes.string
}

export default MainImage
