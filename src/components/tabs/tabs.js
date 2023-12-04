import styles from './tabs.module.css'
import * as actions from '../../Redux/actions'
import { connect } from 'react-redux'

const Tabs = function ({ tabs, setCheap, setFast, sortCheapest, sortFastest }) {
  const classCheap = tabs === 'cheapest' ? styles['tab-checked'] : ''
  const classFast = tabs === 'fastest' ? styles['tab-checked'] : ''

  function handleCheap() {
    setCheap()
    sortCheapest()
  }
  function handleFast() {
    setFast()
    sortFastest()
  }

  return (
    <div className={styles.tabs}>
      <button className={`${styles.tab} ${classCheap}`} type="button" onClick={handleCheap}>
        самый дешевый
      </button>
      <button className={`${styles.tab} ${classFast}`} type="button" onClick={handleFast}>
        самый быстрый
      </button>
      <button className={styles.tab} disabled type="button">
        оптимальный
      </button>
    </div>
  )
}
const mapStateToProps = (state) => ({ tabs: state.tabs })
export default connect(mapStateToProps, actions)(Tabs)
