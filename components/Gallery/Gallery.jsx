import React from 'react'
import PropTypes from 'prop-types'

const Gallery = ({ body, images }) => {
  return <div>{body}</div>
}

Gallery.propTypes = {
  body: PropTypes.node,
  images: PropTypes.arrayOf(PropTypes.string)
}

export default Gallery
