import Head from "next/head";
import styles from './styles.module.scss'

export default function Posts () {
  return(
    <>
      <Head>
        <title>Projects - Dev-JeffersonBrito</title>
      </Head>
      <main className={styles.mainContainer}>
        <div className={styles.content}>
          <div className={styles.cover} >
            <h2>News about the <br/> 
            <strong> Front-end </strong> World</h2>
          </div>
          <div className={styles.contentPostsList}>
            <div className={styles.contentBody}>
              <a href="#" className={styles.cardPost}>
                <time>12 de março de 2021</time>
                <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
              </a>
              <a href="#" className={styles.cardPost}>
                <time>12 de março de 2021</time>
                <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
              </a>
              <a href="#" className={styles.cardPost}>
                <time>12 de março de 2021</time>
                <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
              </a>
              <a href="#" className={styles.cardPost}>
                <time>12 de março de 2021</time>
                <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 