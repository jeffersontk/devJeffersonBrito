import Link from 'next/link';
import { ActiveLink } from '../Header/ActiveLink';
import styles from './styles.module.scss';

interface DrawerProps {
  onClose: () => void;
}

export function Drawer({onClose}:DrawerProps) {
  return (
    <>
      <nav className={styles.drawer}>
        <ActiveLink href="/" activeClassName={styles.active}>
          <a onClick={onClose}>Home</a>
        </ActiveLink>
        <ActiveLink href="/Resume" activeClassName={styles.active}>
          <a onClick={onClose}>Resume</a>
        </ActiveLink>
        <ActiveLink href="/Projects" activeClassName={styles.active}>
          <a onClick={onClose}>Projects</a>
        </ActiveLink>
        <ActiveLink href="/Posts" activeClassName={styles.active}>
          <a onClick={onClose}>Posts</a>
        </ActiveLink>
        <ActiveLink href="/Playlists" activeClassName={styles.active}>
          <a onClick={onClose}>Playlists</a>
        </ActiveLink>
        <a href="#footerContact" onClick={onClose}>Contact</a>
      </nav>
    </>
  )
}