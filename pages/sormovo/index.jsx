import React from 'react';

import { Factory } from '../../components';
import {
  Intro,
  Img,
  OldestPlant,
  Reconstruction,
  BuildingTanks,
  // Rubinchik,
  // Reworking,
  // Women,
  // Ammunition,
  // ShellsForKatyush,
  // AfterWar
} from './chapters';

import styles from './index.module.css';

export default function Sormovo() {
  return (
    <Factory>
      <div className={styles.root}>
        <div className={styles.intro}>
          <Intro />
        </div>

        <div className={styles.img}>
          <Img />
        </div>

        <div className={styles.oldest}>
          <OldestPlant />
        </div>

        <div className={styles.reconstruction}>
          <Reconstruction />
        </div>

        <div className={styles.building}>
          <BuildingTanks />
        </div>

        {/*
        <BuildingTanks />
        <Rubinchik />
        <Reworking />
        <Women />
        <Ammunition />
        <ShellsForKatyush />
        <AfterWar /> */}
      </div>
    </Factory>
  );
}
