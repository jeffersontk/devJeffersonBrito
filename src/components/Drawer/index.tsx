import Link from 'next/link';
import styles from './styles.module.scss';

interface DrawerProps {
  onClose: () => void;
}

export function Drawer({onClose}:DrawerProps) {
  return (
    <>
      <nav className={styles.drawer}>
        <Link href="/">
          <a className={styles.active} onClick={onClose}>Home</a>
        </Link>
        <Link href="#">
          <a onClick={onClose}>Projects</a>
        </Link>
        <Link href="#" >
          <a onClick={onClose}>Posts</a>
        </Link>
        <Link href="#">
          <a onClick={onClose}>Playlists</a>
        </Link>
        <a href="#footerContact" onClick={onClose}>Contact</a>
      </nav>
    </>
  )
}