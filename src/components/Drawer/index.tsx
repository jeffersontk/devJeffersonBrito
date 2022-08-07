import styles from './styles.module.scss';

interface DrawerProps {
  onClose: () => void;
}

export function Drawer({onClose}:DrawerProps) {
  return (
    <>
      <nav className={styles.drawer}>
        <a href="/home" className={styles.active} onClick={onClose}>Home</a>
        <a href="#" onClick={onClose}>Projects</a>
        <a href="#" onClick={onClose}>Posts</a>
        <a href="#" onClick={onClose}>Playlists</a>
        <a href="#footerContact" onClick={onClose}>Contact</a>
      </nav>
    </>
  )
}