import { useRouter } from 'next/router'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import AOS from 'aos'

// import Header from '../components/Header/Header'
import Loader from '../components/Loader/Loader'
import useStore from '../stores/useStore'

import '../css/globals.css'
import 'aos/dist/aos.css'

export default function App ({ Component, props }) {
  const router = useRouter()
  const appStore = useStore()

  const [fsMod, setFsMod] = useState(1)

  const updateDimensions = () => {
    const height = window.innerHeight
    const kk = 880

    if (height < 760) {
      const k = (height >= 400 ? (height - 400) / 400 : 0) * 0.5 + 0.5
      setFsMod(k)
    } else if (height > kk) {
      const k = ((height - kk) / kk) * 1.1 + 1
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
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeEnd)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeEnd)
    }
  }, [])

  const handleRouteChangeStart = (url) => {
    appStore.setLoaderEnd(false)
    appStore.setLoaderStart(true)
    appStore.setNav(false)
  }

  const handleRouteChangeEnd = (url) => {
    appStore.setLoaderStart(false)
    appStore.setLoaderEnd(true)
  }

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Head>
        <title>Горький символ победы</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&amp;PT+Serif:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap" rel="stylesheet" />
      </Head>

      {/* <Header /> */}

      <Loader />
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
