import Link from 'next/link'
import styles from './styles.module.scss'

export function Projects() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.content}>
        <h2>Check out some of my projects</h2>

        <div className={styles.projectsContent}>
          <div className={styles.project}></div>
          <div className={styles.project}></div>
          <div className={styles.project}></div>
        </div>
        <div className={styles.linkGithub}>
          <Link href="/Projects">
            <a >See more Projects</a>
          </Link>
        </div>
      </div>
    </section>
  )
}