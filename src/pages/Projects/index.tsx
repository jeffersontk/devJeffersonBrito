import Head from "next/head";
import styles from './styles.module.scss'
export default function Projects () {
  return(
    <>
      <Head>
        <title>Projects - Dev-JeffersonBrito</title>
      </Head>
      <main className={styles.mainContainer}>
        <div className={styles.content}>
          <div className={styles.cover}>
            <div className={styles.coverContent}>
              <span>{`>_`}</span>
              <h1>My Projects</h1>
            </div>
          </div>
          <div className={styles.contentProjectList}>
            <div className={styles.contentHeader}>
              <div className={styles.contentLabel}>
                <label htmlFor="">Publication</label>
                <span>44 publications</span>
              </div>
              <input type="text" className={styles.contentSearch}  placeholder="Search a project"/>
            </div>
            <div className={styles.contentBody}>
              <a href="#" className={styles.cardProject}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>JavaScript data types and data structures</h3>
                  <span>Há 1 dia</span>
                </div>
                <p className={styles.cardPreview}>
                Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                Dynamic typing
                JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                </p>
                <div className={styles.cardNavigation}>
                  <a href="#">See project</a>
                </div>
              </a>

              <a href="#" className={styles.cardProject}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>JavaScript data types and data structures</h3>
                  <span>Há 1 dia</span>
                </div>
                <p className={styles.cardPreview}>
                Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                Dynamic typing
                JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                </p>
                <div className={styles.cardNavigation}>
                  <a href="#">See project</a>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 