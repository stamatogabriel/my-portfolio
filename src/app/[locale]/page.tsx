import styles from './page.module.css'
import Presentation from './components/Presentation'

export default function Home() {
  return (
    <main className={styles.main}>
      <Presentation />
    </main>
  )
}
