import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <header>
      <nav>
        <Link href="/"><a className={styles.navTitle}>graphshort</a></Link>
      </nav>
    </header>
  )
}

export default Home
