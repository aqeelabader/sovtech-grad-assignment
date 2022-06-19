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

        
        <section className={styles.midsection}>


        <div className={styles.grid}>
        
           <div className={styles.card}>
            <h1 className={styles.smalltitle}>
            Why join SovTech?
            </h1>
              <h2>Latest Development practices, Experience, Culture</h2>
                <p>SovTech clearly emphasizes the importance of modern development through 
                  things like Web3, which from a developers perspective is very important as
                   it means SovTech is likely to continue growing and will be a good company
                    to work with for a long time.
                 </p>One of my friends who works at SovTech invited me to the SovTech 
                 hackathon which I attended on Friday the 10th, and I got to speak with some of
                  the previous graduates and other developers, and they all spoke about the
                   experience they have had learning new skills and the overall culture of
                    working at SovTech which has been described as 
                    a “collaborative, helpful, community”…sounds really good.
                 <p>I think I will definitely learn a lot at SovTech and I will enjoy working there.
                   </p> 
           </div>
           <div className={styles.card}>
            <h1 className={styles.smalltitle}>
            About my Education
            </h1>
              <h2>Software Development Degree, IT Support Higher Certificate</h2>
                <p>I recently completed the IIE&apos;s
                   Bachelor of Computer and Information Sciences in Application Development. The degree focused on software 
                   development, database creation and hosting, application security, and cloud computing.
                   The software development modules focused on Mean stack and .net core development. The more theory-based modules focused
                    on data structure and algorithms,
                   project management, and OOP programming principles.The higher certificate focused on IT Support (A+,N+), business communication and end-user computing.
                 </p>
               
                 <p>
                 I completed both the Degree and Higher Certificate at an average above80% with distinction.
                 </p>
                 <p>For more detail, My transcripts and certificates are attached in the link below:</p>
                 <a href="https://1drv.ms/u/s!AqC0spV8rNs3mcYTBNDKqpU0g9L7yw?e=KXzkfY" className={styles.linkstyles}>Transcripts and Certificates</a>
           </div>
          
           


        </div>


        </section>

        <section className={styles.lastsection}>

        <div className={styles.grid}>
        <div className={styles.widecard}>
            <h1 className={styles.smalltitle}>
            About My personal life
            </h1>
              <h2>Home Automation, DIY, and Baking....</h2>
                <p>When I’m not developing software, I use my tech skills for things that interest me in daily life, such as home automation.
                   I’m on a mission to convert my parents house to a smart home to make their lives easier and make the house more efficient,
                    there are many projects I’m currently working on – from virtualizing everything I possibly can in Proxmox to setting up
                     sensors that trigger things in HomeAssistant
                </p>    
                <p>I also enjoy making things myself, especially if it costs less and works better!</p>
                <p>And who doesn’t like a good dessert? baking is great, even if I’m terrible at it most of the time…  but 
                  I’m getting better…  chat with me , maybe I’ll share a recipe.</p> 
           </div>

        </div>

        </section>
        

      </main>

      <footer className={styles.footer}>
        <h2>Check out the relevant links below:</h2>
        <p>
        <a
          href="https://github.com/aqeelabader"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <Image src="/github.svg" alt="Github" width={40} height={40} />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/aqeelabader/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />
          </span>
        </a>
        <a
          href="https://www.aqeelabader.co.za/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <Image src="/website.png" alt="MySite" width={40} height={40} />
          </span>
        </a>
        </p>
      </footer>
       
    </div>
  )
}
