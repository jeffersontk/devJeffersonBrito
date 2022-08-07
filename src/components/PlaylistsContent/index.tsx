import styles from './styles.module.scss'

export function PlaylistContent() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.content}>
        <h2>I made a playlist to help you with your studies</h2>

        <div className={styles.projectsContent}>
          <div className={styles.project}>
            <img src="/images/beginner.png" alt=""/>
            <span>Beginner</span>
          </div>
          <div className={styles.project}>
            <img src="/images/intermediary.png" alt=""/>
            <span>Intermediary</span>
          </div>
          <div className={styles.project}>
            <img src="/images/advanced.png" alt=""/>
            <span>Advanced</span>
          </div>
        </div>
      </div>
    </section>
  )
}