import React from "react";

import { Factory } from "../../components";
import {
  Intro,
  Img,
  Modernization,
  Mobilization,
  Armor,
  Masters,
  CombatConditions,
  SteelMining,
  Defense,
  Character,
  PeacefulYears,
} from "./chapters";

import styles from "./index.module.css";

const Vmz = () => {
  return (
    <Factory>
      <div className={styles.root}>
        <div className={styles.intro}>
          <Intro />
        </div>

        <div className={styles.img}>
          <Img />
        </div>

        <div className={styles.modernization}>
          <Modernization />
        </div>

        <div className={styles.mobilization}>
          <Mobilization />
        </div>

        <div className={styles.armor}>
          <Armor />
        </div>

        <div className={styles.masters}>
          <Masters />
        </div>

        <div className={styles.combatConditions}>
          <CombatConditions />
        </div>

        <div className={styles.steelMining}>
          <SteelMining />
        </div>

        <div className={styles.defense}>
          <Defense />
        </div>

        <div className={styles.character}>
          <Character />
        </div>

        <div className={styles.peacefulYears}>
          <PeacefulYears />
        </div>
      </div>
    </Factory>
  );
};

export default Vmz;
