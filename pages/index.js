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

        
        <section className={styles.landingsection}>

        {/* intro cards */}
        <div className={styles.grid}>

          <div className={styles.imagecard}>
          <Image src="/me.jpg" alt="me" width={450} height={450} style={{borderRadius: 230}}/>
          </div>
          
          <div className={styles.paragraphcard}>
            <h1 className={styles.title}>
            Hi! Im Aqeel Abader
            </h1>
              <h2>Im a Software Developer</h2>
                <p>I have recently completed a Degree in Computer and Information Sciences in Application Development 
                  at the IIE’s Varsity College - graduated with distinction, I have also completed a Higher Certificate 
                  in IT Support Services - graduated as one of the top 10 students with distinction, and I have completed Matric.
                 </p>     
           </div>

        </div>
        {/* end intro cards */}
        
        </section>
        

      </main>
       
    </div>
  )
}
