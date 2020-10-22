import Head from 'next/head'
import React, { useState, useEffect, useRef, useContext } from 'react'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Test
        </h1>
      </main>
    </div>
  )
}
