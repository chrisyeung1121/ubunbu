import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProfilePic from '../components/ProfilePic/ProfilePic'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christopher Yeung - Entrepreneur, Management Consultant, Technologist and Product </title>
        <meta name="description" content="Christopher Yeung currently works at EY Parthenon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Christopher is awesome.
        </h1>

        <ProfilePic />

        <p className={styles.description}>
          Contact me if you want to understand the following topics
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>M&A</a>
          <a className={styles.card}>Serverless</a>
          <a className={styles.card}>Venture Building</a>
          <a className={styles.card}>Car Ecosystem</a>
          <a className={styles.card}>Design - Figma</a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Contact me at hi@chrisyeung.me</p>
      </footer>
    </div>
  )
}
