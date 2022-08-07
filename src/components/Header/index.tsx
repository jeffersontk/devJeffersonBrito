

import { useBreakpoint } from '../../hooks/useBreakpoint';
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss';
import { Drawer } from '../Drawer';
import { useEffect, useState } from 'react';

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
            <a href="" className={styles.active}>Home</a>
            <a href="">Projects</a>
            <a href="">Posts</a>
            <a href="">Playlists</a>
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