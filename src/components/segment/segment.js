import styles from './segment.module.css'
import { timeTransform, stopTransform } from '../../functionForSegment'

function Segment(props) {
  const { origin, destination, date, stops, duration } = props.data
  const timeDate = timeTransform(date, duration)
  const stopsDate = stopTransform(stops)

  return (
    <div className={styles.segment}>
      <div className={styles.info}>
        <span className={styles['info-header']}>
          {origin} - {destination}
        </span>
        <span className={styles['info-body']}>
          {timeDate.startTime} - {timeDate.endTime}
        </span>
      </div>
      <div className={styles.info}>
        <span className={styles['info-header']}>в пути</span>
        <span className={styles['info-body']}>
          {timeDate.hoursDuration}ч {timeDate.minDuration}м
        </span>
      </div>
      <div className={styles.info}>
        <span className={styles['info-header']}>{stopsDate.head}</span>
        <span className={styles['info-body']}>{stopsDate.stopsString}</span>
      </div>
    </div>
  )
}

export default Segment
