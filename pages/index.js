import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import lax from "lax.js";

import Header from '../components/Header/Header'

import styles from "./index.module.css";

export default function Home() {
  const overlayRef = useRef();
  const factoriesRef = useRef();
  const introRef = useRef();

  return (
    <div className={styles.container}>
      <Head>
        <title>Горький символ победы</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&family=Oswald:wght@300;400&family=PT+Sans+Narrow:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <div className={styles.root}>
        <div className={styles.main}>
          <div className={styles.introWrapper} ref={introRef}>
            <div className={styles.intro}>
              <div className={styles.gradient}>Горький</div>
              <div className={styles.under}>символ победы</div>
            </div>
          </div>

          {/* <div className={styles.overlay} ref={overlayRef} /> */}
        </div>
      </div>
    </div>
  );
}
