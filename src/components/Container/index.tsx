import styles from './Container.module.scss'

const Container = ({ children }: any) => {
  return <div className={`container ${styles.container}`}>{children}</div>
}

Container.displayName = 'Container'
export default Container
