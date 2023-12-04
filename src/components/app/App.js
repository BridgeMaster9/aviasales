import styles from './App.module.css'
import { loadData } from '../../Redux/actions'

import Header from '../header'
import Sidebar from '../sidebar'
import Tabs from '../tabs'
import Tickets from '../tickets'
import ButtonMore from '../button-more'
import { Offline, Online } from 'react-detect-offline'
import { Alert } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const filters = useSelector((state) => state.filters)
  const isFilterSet = Object.values(filters).includes(true)
  const dispatch = useDispatch()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dispatch(loadData())
  }, [])

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <main className={styles['main-content']}>
          <Tabs />
          <Online>
            {isFilterSet ? (
              <Tickets />
            ) : (
              <Alert
                className={styles['ant-alert']}
                message="Рейсов, подходящих под заданные фильтры, не найдено"
                type="info"
              />
            )}
            {isFilterSet ? <ButtonMore /> : null}
          </Online>
          <Offline>
            <Alert className={styles['ant-alert']} message="Отсутствует интернет соединение" type="error" />
          </Offline>
        </main>
      </div>
    </div>
  )
}

export default App
