import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.css'

const Home: NextPage = () => {
  return (
    <div>

      <Head>
        <title>Portfolio</title>
        <meta name='languages' content='web development, programming' />
      </Head>
      <h1>Welcome to my Personal Blog</h1>
    </div>
  )
}

export default Home