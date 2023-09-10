import styles from './page.module.css'
import Presentation from './components/Presentation'
import About from './components/About'

export default function Home() {
  return (
    <main className={styles.main}>
      <Presentation />
      <About />
    </main>
  )
}
