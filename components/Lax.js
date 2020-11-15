import React, { useEffect } from 'react'
import lax from 'lax.js'
import PropTypes from 'prop-types'

export default function Lax ({ children }) {
  useEffect(() => {
    lax.init()
  }, [])

  return <div>{children}</div>
}

Lax.propTypes = {
  children: PropTypes.node
}
