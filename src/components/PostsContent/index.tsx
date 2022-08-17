import Link from 'next/link';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import styles from './styles.module.scss'

export function PostsContent() {
  const breakpoint = useBreakpoint();
  
  const isMobile = breakpoint === 'xs'
  return (
    <section className={styles.sectionContainer}>
        {
          !isMobile && 
          <img src="/images/avatar.svg" alt="Girl coding in Notebook" />
        }
   
      <div className={styles.contentText}>
        <h1>
          News about <br/>
          the <span>Front-end</span> World
        </h1>
        <p>
        Check out the post, where you can find curiosities and can learn something new with each reading 
        </p>
        {
          !isMobile && 
          <Link href="/Posts">
            <a> Check now</a>
          </Link>
        }
      </div>
        {
          isMobile && 
          <img src="/images/avatar.svg" alt="Girl coding in Notebook" />
        }
      {
        isMobile && 
        <Link href="/Posts">
          <a> Check now</a>
        </Link>
      }
    </section>
  )
}