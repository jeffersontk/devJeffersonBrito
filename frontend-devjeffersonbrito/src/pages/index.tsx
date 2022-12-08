import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero } from '../components/Hero'
import { Projects } from '../components/ProjectsContent'
import { PostsContent } from '../components/PostsContent'
import styles from './home.module.scss'
import { PlaylistContent } from '../components/PlaylistsContent'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Dev-JeffersonBrito</title>
      </Head>
      <main className={styles.main}>
        <Hero />
        <Projects />
        <PostsContent />
        <PlaylistContent />
      </main>
    </>
  )
}

export default Home
