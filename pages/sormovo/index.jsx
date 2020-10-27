import React from "react";

import { Factory } from "../../components";
import {
  OldestPlant,
  Reconstruction,
  BuildingTanks,
  Rubinchik,
  Reworking,
  Women,
} from "./chapters";

import styles from "./index.module.css";

const Sormovo = () => {
  return (
    <Factory>
      <div className={styles.root}>
        <OldestPlant />
        <Reconstruction />
        <BuildingTanks />
        <Rubinchik />
        <Reworking />
        <Women />
      </div>
    </Factory>
  );
};

export default Sormovo;
