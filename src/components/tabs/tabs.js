import styles from './tabs.module.css'
import { setCheap, setFast, setOpt, sortCheapest, sortFastest } from '../../Redux/actions'
import { useDispatch } from 'react-redux'

const Tabs = function () {
  const dispatch = useDispatch()
  function handleCheap() {
    dispatch(setCheap())
    dispatch(sortCheapest())
  }
  function handleFast() {
    dispatch(setFast())
    dispatch(sortFastest())
  }
  function handleOpt() {
    dispatch(setOpt())
  }

  return (
    <div className={styles.tabs}>
      <input type="radio" name="tabs" id="cheapest" onClick={handleCheap} />
      <label className={styles.tab} htmlFor="cheapest">
        самый дешевый
      </label>
      <input type="radio" name="tabs" id="fastest" onClick={handleFast} />
      <label className={styles.tab} htmlFor="fastest">
        самый быстрый
      </label>
      <input type="radio" name="tabs" id="optimal" onClick={handleOpt} />
      <label className={styles.tab} htmlFor="optimal">
        оптимальный
      </label>
    </div>
  )
}

export default Tabs
