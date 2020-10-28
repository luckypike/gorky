import React from "react";

import { Factory } from "../../components";
import {
  Heritage,
  LastMorning,
  ForYourself,
  Magicians,
  SpecialOrder,
  TankConstruction,
  PeacefulSky,
} from "./chapters";

import styles from "./index.module.css";

const Ruspolimet = () => {
  return (
    <Factory>
      <div className={styles.root}>
        <Heritage />
        <LastMorning />
        <ForYourself />
        <Magicians />
        <SpecialOrder />
        <TankConstruction />
        <PeacefulSky />
      </div>
    </Factory>
  );
};

export default Ruspolimet;
