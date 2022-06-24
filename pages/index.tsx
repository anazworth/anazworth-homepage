import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  NavBar  from '../components/NavBar'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Austin Nazworth</title>
        <meta name="Website for Austin Nazworth" content="Generated by create next app" />
        <link rel="icon" href="/curryfavicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">
            Hello World!
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    </Layout>
  )
}

export default Home
