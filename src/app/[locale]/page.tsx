import styles from './page.module.css'
import Presentation from './components/Presentation'
import About from './components/About'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className={styles.main}>
      <Presentation />
      <About />
      <Contact />
    </main>
  )
}
