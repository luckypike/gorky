import React from "react";

import { Factory } from "../../components";
import {
  CombatAttachment,
  GunsForBattle,
  SecondHome,
  MachinesAndPeople,
  Сreativity,
  AfterWar,
} from "./chapters";

import styles from "./index.module.css";

const Etna = () => {
  return (
    <Factory>
      <div className={styles.root}>
        <CombatAttachment />
        <GunsForBattle />
        <SecondHome />
        <MachinesAndPeople />
        <Сreativity />
        <AfterWar />
      </div>
    </Factory>
  );
};

export default Etna;
