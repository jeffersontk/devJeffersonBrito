import Head from "next/head";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import styles from './styles.module.scss'

export default function Resume () {
  return(
    <>
     <Head>
        <title>Resume - Dev-JeffersonBrito</title>
      </Head>
      <main className={styles.mainContainer}>
        <div className={styles.content}>
          <div className={styles.cover} />
          <header>
            <img src="https://github.com/jeffersontk.png" alt=""/>
            <div className={styles.ResumeContentHeader}>
              <h1>Jefferson Silva Brito Cabral</h1>
              <h3>Software engineer</h3>
              <h5>Front-end | Typescript | React js | React Native</h5>
              <div className={styles.contentHeaderIconContainer}>
                <span> 
                  <AiOutlineGithub size={20}/> 
                  @jeffersontk
                </span>
                <span> 
                  <HiOutlineOfficeBuilding size={20}/> 
                  Firjan - SENAI
                </span>
              </div>
            </div>
          </header>
          <article>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat ut neque elementum viverra id amet. Vel vel pellentesque purus, vestibulum, urna enim proin neque. Semper suscipit adipiscing neque, bibendum neque donec viverra semper. Phasellus ultricies ut facilisi adipiscing magna. Etiam mattis lectus feugiat lorem risus, vulputate. Placerat ac egestas sed aliquet facilisis massa scelerisque. Id ultrices enim donec nunc, viverra integer suspendisse sodales justo. Tortor egestas purus accumsan pellentesque facilisi amet dui sem urna.
  Sagittis sed faucibus sagittis id sagittis sed enim enim. Tellus eget et ullamcorper diam consectetur. A mauris, quam faucibus viverra fringilla scelerisque ullamcorper. Urna urna, vitae interdum sed ac eget pellentesque. Purus sem eu tempor massa sit euismod ut commodo. Sagittis elementum sapien sem in. Cursus sit tristique enim commodo magna gravida amet, tincidunt ullamcorper. At ornare vitae, vivamus quis. Purus, praesent libero ridiculus commodo. Non id sit molestie aliquam fermentum ut sapien. Mi sit fermentum elit risus quis porttitor. Sit at adipiscing libero scelerisque aliquet faucibus enim blandit accumsan.
  Pellentesque consequat tristique non diam. Ac eros faucibus aliquam nec tristique habitasse tincidunt cursus vel. Nulla consequat at ultrices quis eget sed integer diam ut. Nunc in iaculis nulla vestibulum, nam. Aliquet arcu massa, rutrum pharetra enim quis tincidunt. Mollis vitae at dis dolor, malesuada tincidunt sit. Sagittis, habitant cum dis pellentesque in porttitor cursus.
  Lacus sed placerat blandit mauris lobortis. Eget quam id vestibulum, cras imperdiet eu venenatis. Proin sit sed consectetur nam at parturient enim at. Aliquet viverra sapien nisi, aliquam bibendum. Laoreet ante mattis praesent massa convallis eget nibh nulla aenean.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat ut neque elementum viverra id amet. Vel vel pellentesque purus, vestibulum, urna enim proin neque. Semper suscipit adipiscing neque, bibendum neque donec viverra semper. Phasellus ultricies ut facilisi adipiscing magna. Etiam mattis lectus feugiat lorem risus, vulputate. Placerat ac egestas sed aliquet facilisis massa scelerisque. Id ultrices enim donec nunc, viverra integer suspendisse sodales justo. Tortor egestas purus accumsan pellentesque facilisi amet dui sem urna.
  Sagittis sed faucibus sagittis id sagittis sed enim enim. Tellus eget et ullamcorper diam consectetur. A mauris, quam faucibus viverra fringilla scelerisque ullamcorper. Urna urna, vitae interdum sed ac eget pellentesque. Purus sem eu tempor massa sit euismod ut commodo. Sagittis elementum sapien sem in. Cursus sit tristique enim commodo magna gravida amet, tincidunt ullamcorper. At ornare vitae, vivamus quis. Purus, praesent libero ridiculus commodo. Non id sit molestie aliquam fermentum ut sapien. Mi sit fermentum elit risus quis porttitor. Sit at adipiscing libero scelerisque aliquet faucibus enim blandit accumsan.
  Pellentesque consequat tristique non diam. Ac eros faucibus aliquam nec tristique habitasse tincidunt cursus vel. Nulla consequat at ultrices quis eget sed integer diam ut. Nunc in iaculis nulla vestibulum, nam. Aliquet arcu massa, rutrum pharetra enim quis tincidunt. Mollis vitae at dis dolor, malesuada tincidunt sit. Sagittis, habitant cum dis pellentesque in porttitor cursus.
  Lacus sed placerat blandit mauris lobortis. Eget quam id vestibulum, cras imperdiet eu venenatis. Proin sit sed consectetur nam at parturient enim at. Aliquet viverra sapien nisi, aliquam bibendum. Laoreet ante mattis praesent massa convallis eget nibh nulla aenean.
            </p>
          </article>
        </div>
      </main>
    </>
  )
} 