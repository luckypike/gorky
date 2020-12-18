import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Parallax from 'parallax-js'
import Link from 'next/link'

// import useStore from '../stores/useStore'

import styles from './index.module.css'

export default function Home () {
  // const appStore = useStore()

  const introRef = useRef()
  const prlxRef = useRef()

  useEffect(() => {
    prlxRef.current = new Parallax(introRef.current)

    return () => {
      prlxRef.current.destroy()
    }
  }, [])

  const [windowDimensions, setWindowDimensions] = useState({ width: null, height: null })

  useEffect(() => {
    const getWindowDimensions = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      return {
        width,
        height
      }
    }

    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.cont} style={{ width: '100%', height: `${windowDimensions.height}px` }}>
        <div ref={introRef} className={styles.intro}>
          <div className={styles.text}>
            <div className={styles.name}>
              <span>Горький</span> символ победы
            </div>
          </div>
          <div className={styles.bg} data-depth="0.04">
            <div className={styles.bgin} />
          </div>
          <div className={styles.star} data-depth="0.02" />
        </div>
      </div>

      <div className={styles.factories}>
        <div className={styles.section}>
          <div className={styles.ss}>
            <span>Боевые машины</span>
          </div>

          <div className={styles.items}>
            <Item
              href="/gaz"
              id="gaz"
              title="Государственный автомобильный завод имени В. М. Молотова"
              desc="ПАО ГАЗ, ООО «Автомобильный завод ГАЗ»"
              delay={300}
            />

            <Item
              href="/sormovo"
              id="sormovo"
              title="Завод № 112 «Красное Сормово»"
              desc="ПАО «Завод “Красное Сормово”»"
              delay={300}
            />

            <Item
              href="/drobmash"
              id="drobmash"
              title="ВЫКСУНСКИЙ ЗАВОД ДРОБИЛЬНО-РАЗМОЛЬНОГО ОБОРУДОВАНИЯ"
              desc="ЗАО «Дробмаш», АО «Завод корпусов»"
            />

            <Item
              href="/ruspolimet"
              id="ruspolimet"
              title="КУЛЕБАКСКИЙ МЕТАЛЛУРГИЧЕСКИЙ ЗАВОД"
              desc="ПАО «Русполимет»"
            />

            <Item
              href="/vmz"
              id="vmz"
              title="ВЫКСУНСКИЙ МЕТАЛЛУРГИЧЕСКИЙ ЗАВОД"
              desc="АО «Выксунский металлургический завод»"
            />

            <Item href="/etna" id="etna" title="ГОРЬКОВСКИЙ ЗАВОД «КРАСНАЯ ЭТНА»" desc="АО «Завод „Красная Этна“»" />

            <Item
              href="/gzhd"
              id="gzhd"
              img={styles.i54}
              title="ГОРЬКОВСКАЯ ЖЕЛЕЗНАЯ ДОРОГА"
              desc="Горьковская железная дорога — филиал ОАО РЖД"
            />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.ss}>
            <span>Авиастроение</span>
          </div>

          <div className={styles.items}>
            <Item
              href="/sokol"
              id="sokol"
              title="ГОРЬКОВСКИЙ АВИАСТРОИТЕЛЬНЫЙ ЗАВОД № 21
              ИМЕНИ С. ОРДЖОНИКИДЗЕ"
              desc="Нижегородский авиастроительный завод «Сокол» — филиал АО «РСК „МиГ“»"
            />

            <Item
              href="/gidromash"
              id="gidromash"
              title="ЗАВОД № 119 ИМЕНИ Г. М. МАЛЕНКОВА"
              desc="НПАО «Гидромаш»"
            />

            <Item
              href="/teploobmennik"
              id="teploobmennik"
              img={styles.i32}
              title="ГОСУДАРСТВЕННЫЙ
              ЗАВОД № 469
              ИМЕНИ М. М. ГРОМОВА"
              desc="АО ПКО «Теплообменник»"
            />

            <Item
              href="/gidroagregat"
              id="gidroagregat"
              img={styles.i54}
              title="ПАВЛОВСКИЙ ЗАВОД № 467"
              desc="АО «Гидроагрегат»"
            />

            <Item
              href="/adcbsz"
              id="adcbsz"
              title="ГОРЬКОВСКИЙ МЕХАНИЗИРОВАННЫЙ СТЕКЛОЗАВОД
              ИМЕНИ М. ГОРЬКОГО"
              desc="ОАО «Эй Джи Си Борский стекольный завод»"
            />

            <Item
              href="/dzorg"
              id="dzorg"
              img={styles.i32}
              title="ДЗЕРЖИНСКИЙ
              ЗАВОД № 148 «РУЛОН»"
              desc="ОАО «Дзержинское оргстекло»"
            />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.ss}>
            <span>Артиллерия</span>
          </div>

          <div className={styles.items}>
            <Item
              href="/nmz"
              id="nmz"
              img={styles.i32}
              title="Горьковский машино­строительный Завод № 92 имени И. В. Сталина"
              desc="АО «Нижегородский машиностроительный завод»"
            />

            <Item
              href="/rumo"
              id="rumo"
              img={styles.i54}
              title="ГОРЬКОВСКИЙ ЗАВОД № 718 «ДВИГАТЕЛЬ РЕВОЛЮЦИИ»"
              desc="ОАО РУМО"
            />

            <Item
              href="/paz"
              id="paz"
              img={styles.i54}
              title="Павловский завод автотракторного инструмента имени А. А. Жданова"
              desc="ООО «Павловский автобусный завод»"
            />

            <Item
              href="/zfs"
              id="zfs"
              img={styles.i54}
              title="Горьковский Завод фрезерных станков № 113"
              desc="ЗАО «Завод фрезерных станков»"
            />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.ss}>
            <span>Боеприпасы</span>
          </div>

          <div className={styles.items}>
            <Item
              href="/sverdlov"
              id="sverdlov"
              img={styles.i32}
              title="ДЗЕРЖИНСКИЙ ЗАВОД № 80 ИМЕНИ Я. М. СВЕРДЛОВА"
              desc="ФКП «Завод имени Я. М. Свердлова»"
            />

            <Item
              href="/korund"
              id="korund"
              img={styles.i32}
              title="Чернореченский химический завод имени М. И. Калинина"
              desc="ООО «Корунд»"
            />

            <Item
              href="/yakor"
              id="yakor"
              img={styles.i32}
              title="Горьковский завод № 646 «Красный якорь»"
              desc="АО «Завод „Красный якорь“»"
            />

            <Item
              href="/nmjk"
              id="nmjk"
              img={styles.i32}
              title="Горьковский жиркомбинат имени С. М. Кирова "
              desc="АО НМЖК"
            />

            <Item
              href="/kaprolaktam"
              id="kaprolaktam"
              img={styles.i32}
              title="Дзержинский Завод № 96"
              desc="ОАО «Капролактам» (ликвидировано)"
            />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.ss}>
            <span>Судостроение</span>
          </div>

          <div className={styles.items}>
            <Item
              href="/sormovo_sudo"
              id="sormovo_sudo"
              img={styles.i32}
              title="Горьковский Завод № 112 «Красное Сормово»"
              desc="ПАО «Завод „Красное Сормово“»"
            />

            <Item
              href="/gsz"
              id="gsz"
              img={styles.i32}
              title="Городецкий механический завод"
              desc="ООО «Городецкий судоремонтный завод»"
            />

            <Item
              href="/ssk"
              id="ssk"
              img={styles.i32}
              title="Городецкая судоверфь"
              desc="ПАО «Судоремонтно-судостроительная корпорация»"
            />

            <Item
              href="/ppk"
              id="ppk"
              img={styles.i32}
              title="Судоремонтный завод «Память Парижской Коммуны»"
              desc="АО «Судоремонтный завод „Память Парижской Коммуны“»"
            />

            <Item
              href="/termal"
              id="termal"
              img={styles.i32}
              title="Завод № 645 имени В. И. Ульянова"
              desc="ЗАО «Концерн „Термаль“»"
            />

            <Item
              href="/shipyard"
              id="shipyard"
              img={styles.i32}
              title="Мордовщиковский судомостостроительный завод № 342"
              desc="АО «Окская судоверфь»"
            />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.ss}>
            <span>Приборостроение</span>
          </div>

          <div className={styles.items}>
            <Item
              href="/nitel"
              id="nitel"
              img={styles.i32}
              title="Горьковский Завод № 197 имени В. И. Ленина"
              desc="ПАО «Нижегородский телевизионный завод имени В. И. Ленина»"
            />

            <Item
              href="/frunze"
              id="frunze"
              img={styles.i32}
              title="Горьковский Завод № 326 имени М. В. Фрунзе"
              desc="ПАО «Нижегородское НПО имени М. В. Фрунзе»"
            />

            <Item
              href="/petrovsky"
              id="petrovsky"
              img={styles.i32}
              title="Горьковский Завод № 215 имени Г. И. Петровского"
              desc="ПАО «Завод имени Г. И. Петровского»"
            />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.ss}>
            <span>О проекте</span>
          </div>

          <div className={styles.about}>
            <div className={styles.txt}>
              <h1 className={styles.h1}>
                Передовая тыла
              </h1>

              <p>
                Многие годы Нижегородская область добивалась признания вклада региона в победу в Великой Отечественной войне. В 2020-м наконецто восторжествовала справедливость, и Нижнему Новгороду было присвоено звание Города трудовой доблести.
              </p>

              <p>
                В 1941 году Горький, будучи в тылу, оказался на промышленной передовой. Заводы, расположенные в западных регионах СССР, находились в процессе эвакуации на восток, и перед горьковскими предприятиями стояла задача снабдить армию всем необходимым для обороны Москвы. Пока эвакуированные заводы вставали на ноги и налаживали производство, вплоть до середины 1942 года Горький играл ключевую роль в обороноспособности страны.
              </p>

              <p>
                Целый ряд предприятий был эвакуирован и в Горьковскую область, здесь они начинали работать с колес без каких-либо условий и подготовки. Действовавшие горьковские заводы уже к 29 июня 1941 года перешли на военное положение и начали выпуск оборонной продукции. До войны в Горьковской области работало 44 завода, в том числе 34 крупных, за пять военных лет начали производство еще 22, в том числе 13 эвакуированных.
              </p>

              <p>
                В годы войны Горький был единственным городом СССР, который поставлял на фронт все виды вооружения и военной техники: танки, самолеты, артиллерийские системы, подводные лодки, грузовые и легковые машины, мотоциклы, стрелковое оружие, бомбы, химические и реактивные снаряды, радиостанции, приборы и различные комплектующие. Один за другим из Москвы на предприятия сыпались приказы начать производство танков, самолетов, новых типов двигателей, пушек, пулеметов, стали. Руководителям заводов в отсутствие материалов и комплектующих приходилось самим осваивать не только выпуск новых видов продукции, но и налаживать производство сырья, вплоть до разработки залежей полезных ископаемых.
              </p>

              <p>
                Многим приходилось работать под наскоро построенными навесами и в переоборудованных цехах, не предназначенных для выпуска оборонной продукции, без отопления, разводя костры прямо внутри зданий или растапливая горнушки, в чаду и копоти, при тусклом освещении, поскольку окна закрашивали черной краской или заколачивали досками, чтобы обезопасить предприятия от налетов немецкой авиации.
              </p>

              <p>
                За пять лет горьковчане сделали невозможное. Горьковские заводы поставили на фронт треть от всех танков и САУ, выпущенных в СССР в годы войны, более трети артиллерийских систем, треть грузовых автомобилей, четверть самолетов-истребителей, половину подводных лодок, больше половины радиостанций. Химические предприятия региона произвели половину всех взрывчатых веществ, изготовленных на заводах СССР.
              </p>

              <p>
                В этом издании мы собрали уже известную и ранее не публиковавшуюся информацию о нижегородских, ранее горьковских заводах, работавших в тесной кооперации друг с другом и благодаря этому внесших неоценимый вклад в победу в Великой Отечественной войне. По сути, сегодняшний потенциал экономики Нижегородской области был сформирован в те тяжелейшие для страны годы. Многие из предприятий, обеспечивавших оборону нашей родины, продолжают работать до сих пор и являются крупнейшими в своей отрасли, сохраняя уникальные технологии производства. Но есть и заводы с печальной судьбой: они смогли пережить войну, но не пережили наше время. Важно помнить обо всех.
              </p>
            </div>

            <div className={styles.authors}>
              <p>
                <i>Руководитель проекта</i>
                <br />
                Мария Оладышкина
              </p>

              <p>
                <i>Редакторы</i>
                <br />
                Александра Викулова,
                Татьяна Салахетдинова,
                Шамиль Идиатуллин
              </p>

              <p>
                <i>Авторы</i>
                <br />
                Татьяна Салахетдинова,
                Александра Викулова,
                Анастасия Еремина,
                Екатерина Тарасова,
                Алексей Булавин
              </p>

              <p>
                <i>Арт-директор</i>
                <br />
                Мария Оладышкина
              </p>

              <p>
                <i>Верстка</i>
                <br />
                Александр Седюк,
                Виктория Шидяева
              </p>

              <p>
                <i>Онлайн-версия</i>
                <br />
                Андрей Брижинёв
              </p>

              <p>
                <i>Дизайн обложки</i>
                <br />
                Алексей Базунов
              </p>

              <p>
                <i>Фото на обложке</i>
                <br />
                Александр Ивасенко
              </p>

              <p>
                <i>Реставрация фотографий</i>
                <br />
                Сергей Соколов
              </p>

              <p>
                <i>Научный консультант</i>
                <br />
                Фёдор Дроздов
              </p>

              <p>
                <i>Сбор материалов</i>
                <br />
                Наталья Александрова,
                Ирина Клевакова,
                Надежда Ласенко,
                Андрей Репин,
                Кристина Савостьянова,
                Мария Семикова,
                Инна Шаля,
                Роман Яровицын
              </p>

              <p>
                <i>Корректор</i>
                <br />
                Людмила Веселова
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Item.propTypes = {
  id: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.string,
  scroller: PropTypes.bool,
  tIn: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tOut: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

function Item ({ href, title, id, desc, img }) {
  const [delay, setDelay] = useState(0)
  const [duration, setDuration] = useState(500)

  useEffect(() => {
    setDelay((Math.round((Math.random() * 500 + 200) / 50) * 50).toString())
    setDuration((Math.round((Math.random() * 500 + 750) / 50) * 50).toString())
  }, [])

  return (
    <Link href={href}>
      <a
        className={cn([styles.item, styles[id]])}
        data-aos="fade-up"
        data-aos-delay={delay}
        data-aos-duration={duration}
      >
        <div className={cn(styles.image, img, styles[id])} />

        <div className={styles.dt}>
          <div className={styles.title}>{title}</div>

          <div className={styles.desc}>{desc}</div>
        </div>
      </a>
    </Link>
  )
}
