import Head from 'next/head'
import Comments from './Comments'
import Player from './Player'
import SidebarPlaylists from './SidebarPlaylists'
import styles from './styles.module.scss'

export default function Playlists () {
  return(
    <>
      <Head>
        <title>Playlists | Dev-JeffersonBrito</title>
      </Head>
      <main className={styles.mainContainer}>
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.contentPlayer}>
              <Player />
              <Comments />
            </div>
            <SidebarPlaylists />
          </div>
        </div>
      </main>
    </>
  )
} 