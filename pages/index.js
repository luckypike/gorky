import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import lax from "lax.js";

import styles from "./index.module.css";

export default function Home() {
  const overlayRef = useRef();
  const factoriesRef = useRef();
  const introRef = useRef();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.root}>
        <div className={styles.main}>
          <div className={styles.introWrapper} ref={introRef}>
            <div className={styles.intro}>
              <div className={styles.gradient}>Горький</div>
              <div className={styles.under}>символ победы</div>
            </div>
          </div>

          <div className={styles.overlay} ref={overlayRef} />
        </div>
      </div>
    </div>
  );
}
