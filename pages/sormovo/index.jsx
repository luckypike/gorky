import React from "react";

import { Factory } from "../../components";
import {
  OldestPlant,
  Reconstruction,
  BuildingTanks,
  Rubinchik,
  Reworking,
  Women,
  Ammunition,
  ShellsForKatyush,
  AfterWar
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
        <Ammunition />
        <ShellsForKatyush />
        <AfterWar />
      </div>
    </Factory>
  );
};

export default Sormovo;
