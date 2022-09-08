import { useBreakpoint } from '../../../hooks/useBreakpoint';
import styles from './styles.module.scss'

export default function SidebarPlaylists () {
  const breakpoint = useBreakpoint();
  
  const isMobile = breakpoint === 'xs'
  
  return(
    <aside
      className={isMobile 
        ? `${styles.asideContainerMobile}` 
        : `${styles.asideContainer}`}
      >
      <header className={styles.contentHeader}>
        <label htmlFor="level">Select your level
          <select name="level" id="level">
            <option value="beginner">Beginner</option>
            <option value="intermediary">Intermediary</option>
            <option value="advanced">Advanced</option>
          </select>
        </label>
        <div className={styles.tagsContainer}>
          <input type="text" placeholder='techs'/>
          <div className={styles.tags}>   
            <span>Javascript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>SCSS</span>
          </div>
        </div>
      </header>
      <ul className={styles.playlist}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </aside>
  )
} 