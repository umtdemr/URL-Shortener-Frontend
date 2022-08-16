import type { NextPage } from 'next'
import Head from 'next/head'
import Form from '../components/form/Form'
import Header from '../components/header/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ShortQL</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
