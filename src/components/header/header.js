import logo from './Logo.png'
import styles from './header.module.css'
import { Spin } from 'antd'
import { useSelector } from 'react-redux'

const Header = function () {
  const loading = useSelector((state) => state.loading)

  return (
    <header className={styles.header}>
      {loading ? (
        <Spin size="large" />
      ) : (
        <img className={styles.logo} src={logo} alt="logo" width="60px" height="60px" />
      )}
    </header>
  )
}

export default Header
