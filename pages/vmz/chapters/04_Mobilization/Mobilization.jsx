import React from "react";
import classNames from "classnames";
import Image from "next/image";

import {
  MainText,
  CommonText,
  Speech,
  CommonImage,
} from "../../../../components";

import styles from "./Mobilization.module.css";

const Mobilization = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Всеобщая мобилизация">
          <p>
            Сообщение о начале войны застигло выксунских металлургов в местном
            доме отдыха.
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/vmz/4/3.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Сотрудник завода И. Г. Корчин вспоминает: «В воскресенье 22 июня
            1941 года многие из руководства завода и цехов находились в
            Песоченском доме отдыха. Услышав в 11 часов утра по радио речь В. М.
            Молотова, все быстро поехали на завод — там стихийно собирались
            толпами люди и ждали распоряжений — что делать? Состоялись митинги и
            на другой, и на третий день. Ораторы клеймили фашистов, клялись
            защитить Родину, мужчины направлялись в военкомат за мобилизационной
            повесткой. В первые дни войны — в июне-июле — мобилизовали не только
            людей, а и немногочисленный заводской транспорт, радиоприемники.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/vmz/4/1.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            В город сразу же начали прибывать беженцы — их селили в общежитиях,
            а потом и в квартирах, уплотняя прежних жильцов. В суматохе первых
            дней войны было мобилизовано много квалифицированных техников, позже
            их пришлось через облвоенкомат возвращать обратно на завод». 29 июня
            и 1 июля выксунская партийная организация провожала на фронт первых
            коммунистов-добровольцев. Всего из городской партийной организации
            ушли на фронт 549 человек. Группами уходили добровольно на фронт
            выпускники металлургического техникума, средних школ, молодежь с
            завода.
          </p>
          <CommonImage>
            <figure className={classNames(styles.img, styles._2)}>
              <Image src="/images/vmz/4/2.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <Speech
            title="«Победный булат»"
            author={{
              name: "Сталевар ВМЗ в годы войны В. А. Веретенов",
            }}
          >
            «Возвращаясь домой, нагоняю в проходной старейшего сталевара, всеми
            уважаемого на заводе человека, стахановца Василия Семеновича
            Ермакова. Учился и я у него. „Ну что, Василий, — говорит Ермаков. —
            Будем ковать теперь победный булат. — Жмет мне крепко руку и, как бы
            подытоживая свои раздумья, заключает: — Что же, скуем“».
          </Speech>
        </CommonText>
      </div>
    </div>
  );
};

export default Mobilization;
