import React from 'react'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'

import useStore from '../../stores/useStore'

import styles from './Loader.module.css'

const Loader = observer(() => {
  const appStore = useStore()

  return (
    <>
      <div className={cn(styles.root, { [styles.start]: appStore.loaderStart, [styles.end]: appStore.loaderEnd })}>
        <div className={styles.loader} />
      </div>
    </>
  )
})

export default Loader
