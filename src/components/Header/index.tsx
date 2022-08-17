

import { useBreakpoint } from '../../hooks/useBreakpoint';
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss';
import { Drawer } from '../Drawer';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ActiveLink } from './ActiveLink';

export function Header(){
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [offset, setOffset] = useState(0);
  const breakpoint = useBreakpoint();
  
  const isMobile = breakpoint === 'xs'

  const toggleDrawer = ()=>{
    setDrawerOpen(!drawerOpen)
  }

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);

      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`${styles.headerContainer} ${offset > 0 ? styles.sticky : ''}`}>
      <div className={styles.headerContent}>
        <h2>
          <span>{`< `}</span>
          DevJeffersonBrito
          <span>{` />`}</span>
        </h2>
        {
          isMobile ? (
            <button 
            type="button" 
            className={styles.HamburgerButton}
            onClick={toggleDrawer}
          >
            {
              drawerOpen ? <FiX color="#fff"/>  : <GiHamburgerMenu color="#fff"/>
            }
          </button>
          
          ): (
          <nav>
           <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
           <ActiveLink href="/Resume" activeClassName={styles.active}>
            <a>Resume</a>
          </ActiveLink>
          <ActiveLink href="/Projects" activeClassName={styles.active}>
            <a>Projects</a>
          </ActiveLink>
          <ActiveLink href="/Posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
          <ActiveLink href="/Playlists" activeClassName={styles.active}>
            <a>Playlists</a>
          </ActiveLink >
            <a href="#footerContact">Contact</a>
          </nav>
          )
        }
      </div>
      {drawerOpen && <Drawer onClose={toggleDrawer}/>}
      </header>
    </>
  )
}