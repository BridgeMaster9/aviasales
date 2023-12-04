import styles from './sidebar.module.css'
import * as actions from '../../Redux/actions'
import { connect } from 'react-redux'
import { useEffect } from 'react'

const Sidebar = function ({ filters, setAll, cleanOnlyAll, setWithout, setOne, setTwo, setThree }) {
  useEffect(() => {
    if (filters.without && filters.one && filters.two && filters.three && !filters.all) setAll()
    if (!(filters.without && filters.one && filters.two && filters.three) && filters.all) cleanOnlyAll()
  })

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>количество пересадок</div>
      <ul className={styles.filters}>
        <li className={styles.filter}>
          <label className={styles.checkbox}>
            <input
              className="all"
              type="checkbox"
              onChange={(event) => setAll(event.target.checked)}
              checked={filters.all}
            />
            <span />
            Все
          </label>
        </li>
        <li className={styles.filter}>
          <label className={styles.checkbox}>
            <input
              className="without-transfer"
              type="checkbox"
              onChange={(event) => setWithout(event.target.checked)}
              checked={filters.without}
            />
            <span />
            Без пересадок
          </label>
        </li>
        <li className={styles.filter}>
          <label className={styles.checkbox}>
            <input
              className="one-transfer"
              type="checkbox"
              onChange={(event) => setOne(event.target.checked)}
              checked={filters.one}
            />
            <span />1 пересадка
          </label>
        </li>
        <li className={styles.filter}>
          <label className={styles.checkbox}>
            <input
              className="two-transfer"
              type="checkbox"
              onChange={(event) => setTwo(event.target.checked)}
              checked={filters.two}
            />
            <span />2 пересадки
          </label>
        </li>
        <li className={styles.filter}>
          <label className={styles.checkbox}>
            <input
              className="three-transfer"
              type="checkbox"
              onChange={(event) => setThree(event.target.checked)}
              checked={filters.three}
            />
            <span />3 пересадки
          </label>
        </li>
      </ul>
    </aside>
  )
}

const mapStateToProps = (state) => ({ filters: state.filters })

export default connect(mapStateToProps, actions)(Sidebar)
