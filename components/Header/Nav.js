import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import styles from './Nav.module.css'

Nav.propTypes = {
  setActive: PropTypes.func
}

export default function Nav ({ setActive }) {
  return (
    <nav className={styles.root}>
      <ul className={styles.menu}>
        <Item
          to="/gaz"
          title="Государственный автомобильный завод имени В. М. Молотова"
          desc="ПАО ГАЗ, ООО «Автомобильный завод ГАЗ»"
          setActive={setActive}
        />

        <Item
          to="/sormovo"
          title="Завод № 112 «Красное Сормово»"
          desc="ПАО «Завод “Красное Сормово”»"
          setActive={setActive}
        />

        <Item
          to="/drobmash"
          title="Выксунский машиностроительный завод дробильно-размольного оборудования"
          desc="ЗАО «Дробмаш» и АО «Завод корпусов»"
          setActive={setActive}
        />

        <Item
          to="/ruspolimet"
          title="Кулебакский металлургический завод имени Кирова"
          desc="ПАО «Русполимет»"
          setActive={setActive}
        />

        <Item
          to="/vmz"
          title="Выксунский металлургический завод"
          desc="АО «Выксунский металлургический завод»"
          setActive={setActive}
        />

        <Item
          to="/etna"
          title="Горьковский государственный ордена Ленина завод «Красная Этна»"
          desc="ПАО «Завод „Красная этна“»"
          setActive={setActive}
        />

        <Item
          to="/gzhd"
          title="Горьковская железная дорога"
          desc="Филиал АО «Российские железные дороги»"
          setActive={setActive}
        />

        <Item
          to="/sokol"
          title="Горьковский авиастроительный завод № 21 имени С. Орджоникидзе"
          desc="Филиал АО «Российские железные дороги»"
          setActive={setActive}
        />

        <Item
          to="/gidromash"
          title="Завод № 119 имени Г. М. Маленкова"
          desc="НПАО «Гидромаш»"
          setActive={setActive}
        />

        <Item
          to="/teploobmennik"
          title="Государственный Завод № 469 имени М. М. Громова"
          desc="АО ПКО «Теплообменник»"
          setActive={setActive}
        />

        <Item
          to="/gidroagregat"
          title="Павловский завод № 467"
          desc="АО «Гидроагрегат»"
          setActive={setActive}
        />

        <Item
          to="/adcbsz"
          title="Дзержинский Завод № 148 «Рулон»"
          desc="ОАО «Дзержинское оргстекло»"
          setActive={setActive}
        />

        <Item
          to="/dzorg"
          title="Горьковский механизированный стеклозавод имени М. Горького"
          desc="ОАО «Эй Джи Си Борский стекольный завод»"
          setActive={setActive}
        />
      </ul>
    </nav>
  )
}

Item.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  setActive: PropTypes.func
}

function Item ({ to, title, desc, setActive }) {
  return (
    <li className={styles.li}>
      <Link className={styles.a} href={to} onClick={() => setActive(false)}>
        <a className={styles.item}>
          <div className={styles.title}>{title}</div>

          <div className={styles.desc}>{desc}</div>
        </a>
      </Link>
    </li>
  )
}
