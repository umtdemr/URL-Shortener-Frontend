import type { NextPage } from 'next'
import Form from '../components/form/Form'
import Header from '../components/header/Header'

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
