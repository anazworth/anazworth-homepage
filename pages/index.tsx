import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  NavBar  from '../components/NavBar'
import Layout from '../components/layout'
import Footer from '../components/Footer'
import austin from '../images/austin.jpg'

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
      <div className="flex flex-col space-y-8">
      <div className="flex flex-col sm:flex-row space-x-4 space-y-4 sm: space-y-2 justify-center">
        <Image className="basis-1/3 sm:basis-1/2 drop-shadow-2xl py-4"
            src="/austin.jpeg"
            alt="Photo of Austin Nazworth"
            width={216}
            height={256}
            layout="fixed"/>
        <div className="flex flex-col basis-2/3 sm:basis-1/2 space-y-4">
        <h1 className="sm:text-3xl font-bold underline underline-offset-8">
            Austin Nazworth
        </h1>
        <p className="text-sm">I&apos;m currently a full time student at Valencia College in Orlando, FL.
            I was born and raised in Starke, FL but I now live in Winter Garden, FL.
            I spent 5 years in a Marine Corps Harrier squadron, and I just got my A.S.
            in I.T.</p>
        <p className="text-sm">I&apos;m currently working on my bachelors degree in Software
            Devlopment and Computing Technologies.</p>
        </div>
        </div>

        {/*@Timeline*/}

      <div className="flex flex-row align-center justify-center">
        <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold underline underline-offset-8">Timeline</h2>
        <ul>
            <li className="text-sm"><strong className="text-nord8">1996</strong> - Born in Starke, FL</li>
            <li className="text-sm"><strong className="text-nord8">2014</strong> - Graduated from BradFord High School</li>
            <li className="text-sm"><strong className="text-nord8">2014 -&gt; 2019</strong> - United States Marine Corps</li>
            <li className="text-sm"><strong className="text-nord8">2020</strong> - First year at Valencia College</li>
            <li className="text-sm"><strong className="text-nord8">2022</strong> - Received A.S. in Information Technology from Valencia</li>
            <li className="text-sm"><strong className="text-nord13">Present</strong> - Working on B.A.S in Software Devleopment at Valencia</li>
        </ul>
        </div>
      </div>

      </div>
      </main>
    </div>
    </Layout>
  )
}

export default Home
