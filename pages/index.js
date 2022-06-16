import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aqeel SovTech Assignment</title>
        <meta name="description" content="coming soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          coming soon...nice things being developed.
        </h1>

      </main>
       
    </div>
  )
}
