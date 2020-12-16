import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Link from 'next/link'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

import useStore from '../../stores/useStore'

import s from './Nav.module.css'

function ActiveLink ({ href, title }) {
  const router = useRouter()

  return (
    <Link href={href}>
      <a className={classNames({ [s.active]: router.pathname === href })}>{title}</a>
    </Link>
  )
}

ActiveLink.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string
}

const Nav = observer(() => {
  const appStore = useStore()

  return (
    <nav className={classNames(s.root, { [s.active]: appStore.nav })}>
      <div>
        <div className={s.section}>
          Боевые машины
        </div>

        <ul className={s.factories}>
          <li>
            <ActiveLink
              href="/gaz"
              title="Горьковский автомобильный завод"
            />
          </li>

          <li>
            <ActiveLink
              href="/sormovo"
              title="Завод «Красное Сормово»"
            />
          </li>

          <li>
            <ActiveLink
              href="/drobmash"
              title="«Дробмаш», Завод корпусов"
            />
          </li>

          <li>
            <ActiveLink
              href="/ruspolimet"
              title="«Русполимет»"
            />
          </li>

          <li>
            <ActiveLink
              href="/vmz"
              title="Выксунский металлургический завод"
            />
          </li>

          <li>
            <Link href="/">
              <a></a>
            </Link>
            <ActiveLink
              href="/etna"
              title="Завод «Красная Этна»"
            />
          </li>

          <li>
            <ActiveLink
              href="/gzhd"
              title="Горьковская железная дорога"
            />
          </li>
        </ul>
      </div>

      <div>
        <div className={s.section}>
          Авиастроение
        </div>

        <ul className={s.factories}>
          <li>
            <ActiveLink
              href="/sokol"
              title="Нижегородский авиастроительный завод «Сокол»"
            />
          </li>

          <li>
            <ActiveLink
              href="/gidromash"
              title="«Гидромаш»"
            />
          </li>

          <li>
            <ActiveLink
              href="/teploobmennik"
              title="«Теплообменник»"
            />
          </li>

          <li>
            <ActiveLink
              href="/gidroagregat"
              title="«Гидроагрегат»"
            />
          </li>

          <li>
            <ActiveLink
              href="/adcbsz"
              title="Борский стекольный завод"
            />
          </li>

          <li>
            <ActiveLink
              href="/dzorg"
              title="Дзержинское оргстекло"
            />
          </li>
        </ul>
      </div>

      <div>
        <div className={s.section}>
          Артиллерия
        </div>

        <ul className={s.factories}>
          <li>
            <ActiveLink
              href="/nmz"
              title="Нижегородский машиностроительный завод"
            />
          </li>

          <li>
            <ActiveLink
              href="/rumo"
              title="РУМО"
            />
          </li>

          <li>
            <ActiveLink
              href="/paz"
              title="Павловский автобусный завод"
            />
          </li>

          <li>
            <ActiveLink
              href="/zfs"
              title="Завод фрезерных станков"
            />
          </li>
        </ul>
      </div>

      <div>
        <div className={s.section}>
        Боеприпасы
        </div>

        <ul className={s.factories}>
          <li>
            <ActiveLink
              href="/sverdlov"
              title="Завод имени Я. М. Свердлова"
            />
          </li>

          <li>
            <ActiveLink
              href="/korund"
              title="«Корунд»"
            />
          </li>

          <li>
            <ActiveLink
              href="/yakor"
              title="Завод «Красный якорь»"
            />
          </li>

          <li>
            <ActiveLink
              href="/nmjk"
              title="НМЖК"
            />
          </li>

          <li>
            <ActiveLink
              href="/kaprolaktam"
              title="«Капролактам»"
            />
          </li>
        </ul>
      </div>

      <div>
        <div className={s.section}>
        Судостроение
        </div>

        <ul className={s.factories}>
          <li>
            <ActiveLink
              href="/sormovo_sudo"
              title="Завод «Красное Сормово»"
            />
          </li>

          <li>
            <ActiveLink
              href="/gsz"
              title="Городецкий судоремонтный завод"
            />
          </li>

          <li>
            <ActiveLink
              href="/ssk"
              title="Судоремонтно-судостроительная корпорация"
            />
          </li>

          <li>
            <ActiveLink
              href="/ppk"
              title="Завод «Память Парижской Коммуны»"
            />
          </li>

          <li>
            <ActiveLink
              href="/termal"
              title="Концерн «Термаль»"
            />
          </li>

          <li>
            <ActiveLink
              href="/shipyard"
              title="Окская судоверфь"
            />
          </li>
        </ul>
      </div>

      <div>
        <div className={s.section}>
        Приборостроение
        </div>

        <ul className={s.factories}>
          <li>
            <ActiveLink
              href="/nitel"
              title="Нижегородский телевизионный завод имени В. И. Ленина"
            />
          </li>

          <li>
            <ActiveLink
              href="/frunze"
              title="Нижегородское научно-производственное объединение имени М. В. Фрунзе"
            />
          </li>

          <li>
            <ActiveLink
              href="/petrovsky"
              title="Завод имени Г. И. Петровского"
            />
          </li>
        </ul>
      </div>
    </nav>
  )
})

export default Nav
