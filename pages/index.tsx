import type { NextPage } from 'next'
import Form from '../components/form/Form'
import Header from '../components/header/Header'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="wrapper">
          <Form />
        </div>
      </main>
    </>
  )
}

export default Home
