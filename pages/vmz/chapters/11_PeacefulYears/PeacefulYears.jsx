import React from "react";
import classNames from "classnames";
import Image from "next/image";

import { MainText, CommonText, CommonImage } from "../../../../components";

import styles from "./PeacefulYears.module.css";

const PeacefulYears = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="В мирные годы">
          <p>После войны ВМЗ вернулся к выпуску гражданской продукции.</p>

          <CommonImage>
            <figure className={classNames(styles.img, styles.main)}>
              <Image src="/images/vmz/11/1.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </MainText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            В 1947 году предприятие стало выпускать столько же труб и стального
            проката, сколько до войны, а в 1948-м вернулось к довоенным объемам
            производства стали. В 1970–1980 годы завод фактически получил второе
            рождение: были построены почти все действующие сегодня цехи
            основного производства. В 1973 году введен в эксплуатацию крупнейший
            в Европе колесопрокатный цех. Чтобы обеспечить его специальной
            колесной сталью, был реконструирован мартеновский цех. В 1986 году
            на ВМЗ ввели в строй первый в стране цех по производству
            электросварных обсадных труб. Сегодня ВМЗ является одним из
            крупнейших производителей нефтегазовых труб и железнодорожных колес
            в стране.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/vmz/11/2.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>
    </div>
  );
};

export default PeacefulYears;
