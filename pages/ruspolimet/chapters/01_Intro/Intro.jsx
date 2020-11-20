import React from "react";

import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.root}>
      <div>
        <h1 className={styles.title}>Кулебакский металлургический завод</h1>

        <p className={styles.desc}>ПАО «Русполимет»</p>
      </div>

      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.digit}>крупнейший смежник </div>

          <div className={styles.what}>
            «Красного Сормова» и Горьковского автозавода в 1941–1945 годах
          </div>
        </div>
      </div>

      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.digit}>Прочная лобовая броня Т-34</div>

          <div className={styles.what}>создана конструкторами завода № 178</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
