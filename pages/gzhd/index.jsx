import React from "react";

import { Factory } from "../../components";
import {
  StrategicMove,
  Military,
  Faster,
  NewFrames,
  LocomotiveOfVictory,
  Fortresses,
  Feats,
  ExceptBread,
  Roads,
} from "./chapters";

import styles from "./index.module.css";

const Vmz = () => {
  return (
    <Factory>
      <div className={styles.root}>
        <StrategicMove />
        <Military />
        <Faster />
        <NewFrames />
        <LocomotiveOfVictory />
        <Fortresses />
        <Feats />
        <ExceptBread />
        <Roads />
      </div>
    </Factory>
  );
};

export default Vmz;
