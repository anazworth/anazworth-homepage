import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import {IndexTimelineTools} from "../components/index/indexTimelineTools";
import {heroSectionIndex} from "../components/index/heroSectionIndex";

const Home: NextPage = () => {
  return (
    <Layout>
        <div className={styles.container}>
            <Head>
                <title>Austin Nazworth</title>
                <meta name="Website for Austin Nazworth" content="Generated by create next app"/>
                <link rel="icon" href="/curryfavicon.ico"/>
            </Head>

            <main className={styles.main}>
                <div className="flex flex-col max-w-4xl mt-20 space-y-10">

                    {/*@Bio*/}

                    {heroSectionIndex()}


                    <IndexTimelineTools/>

                </div>
            </main>
        </div>
    </Layout>
  )
}

export default Home
