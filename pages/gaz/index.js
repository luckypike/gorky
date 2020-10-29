import React, { useState, useEffect } from "react";

import { Factory } from "../../components";
import {
  Intro
} from "./chapters";

import styles from "./index.module.css";

const Gaz = () => {
  return (
    <Factory>
      <div className={styles.root}>
        <Intro />
      </div>
    </Factory>
  );
};

export default Gaz;
