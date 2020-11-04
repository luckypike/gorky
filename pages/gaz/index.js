import React, { useState, useEffect } from "react";

import { Factory } from "../../components";
import {
  Intro,
  Img1,
  USSRAuto,
  FirstYears
} from "./chapters";

import styles from "./index.module.css";

const Gaz = () => {
  return (
    <Factory>
      <div className={styles.root}>

        <div className={styles.intro}>
          <Intro />
        </div>

        <div className={styles.img1}>
          <Img1 />
        </div>

        <div className={styles.ussrauto}>
          <USSRAuto />
        </div>

        <div className={styles.firstYears}>
          <FirstYears />
        </div>

      </div>
    </Factory>
  );
};

export default Gaz;
