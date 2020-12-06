import { useRouter } from 'next/router'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// import Header from '../components/Header/Header'
import useStore from '../stores/useStore'

import '../css/globals.css'

export default function App ({ Component, props }) {
  const router = useRouter()
  const appStore = useStore()

  const [fsMod, setFsMod] = useState(1)

  const updateDimensions = () => {
    const height = window.innerHeight

    if (height < 760) {
      const k = (height >= 400 ? (height - 400) / 400 : 0) * 0.5 + 0.5
      setFsMod(k)
    } else if (height > 960) {
      const k = ((height - 960) / 960) * 1.5 + 1
      setFsMod(k)
    } else {
      setFsMod(1)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    updateDimensions()

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty('--fs_mod', fsMod)
  }, [fsMod])

  useEffect(() => {
    if (router.pathname === '/') {
      appStore.setDark(true)
    }
  }, [router.pathname])

  return (
    <>
      <Head>
        <title>Горький символ победы</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;600&amp;display=swap" rel="stylesheet" />
      </Head>

      {/* <Header /> */}

      <Component { ...props } />
    </>
  )
}

App.defaultProps = {
  props: undefined
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  props: PropTypes.objectOf(PropTypes.any)
}
