import styles from './button-more.module.css'
import { setMore } from '../../Redux/actions'
import { useDispatch } from 'react-redux'

const ButtonMore = function () {
  const dispatch = useDispatch()
  const onSetMore = () => dispatch(setMore())
  return (
    <div className={styles.inner}>
      <button className={styles.more} onClick={onSetMore} type="button">
        Показать еще 5 билетов
      </button>
    </div>
  )
}

export default ButtonMore
