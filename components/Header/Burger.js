import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { observer } from 'mobx-react-lite'

import useStore from '../../stores/useStore'

import styles from './Burger.module.css'

const Burger = observer(({ activeNav }) => {
  const appStore = useStore()

  return (
    <div className={classNames(styles.root, { [styles.dark]: appStore.dark, [styles.active]: activeNav })}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
})

Burger.propTypes = {
  activeNav: PropTypes.bool
}

export default Burger
