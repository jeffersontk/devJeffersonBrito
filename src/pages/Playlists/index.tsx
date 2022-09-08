import Head from 'next/head'
import { useState } from 'react'
import { useBreakpoint } from '../../hooks/useBreakpoint'
import Comments from './Comments'
import Player from './Player'
import SidebarPlaylists from './SidebarPlaylists'
import styles from './styles.module.scss'
import {MdPlaylistPlay} from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'

export default function Playlists () {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const breakpoint = useBreakpoint();
  
  const isMobile = breakpoint === 'xs'

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  return(
    <>
      <Head>
        <title>Playlists | Dev-JeffersonBrito</title>
      </Head>
      <main className={styles.mainContainer}>
        <div className={styles.content}>
          {
            isMobile &&
            <button 
              className={
                !drawerOpen 
                  ? styles.positionButtonOpenDrawer
                  : styles.positionButtonCloserDrawer
              } 
              onClick={()=> toggleDrawer()}
            > 
              {!drawerOpen 
              ? <MdPlaylistPlay />
              : <AiOutlineClose />
              }
            </button>
          }
          { isMobile && drawerOpen &&
            <SidebarPlaylists />
          }
          <div className={styles.container}>
            <div className={styles.contentPlayer}>
              <Player />
              <Comments />
            </div>
            {
              !isMobile &&  <SidebarPlaylists />
            }
          </div>
        </div>
      </main>
    </>
  )
} 