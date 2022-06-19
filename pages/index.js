import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aqeel - SovTech</title>
        <meta name="description" content="Assignment for SovTech grad program" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <section>
          <div>
          <h1>Aqeel Abader - SovTech Assignment</h1>
          </div>
        </section>

      </main>
       
    </div>
  )
}
