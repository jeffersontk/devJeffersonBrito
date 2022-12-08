import { BsYoutube } from 'react-icons/bs'
import { SiDiscord } from 'react-icons/si'
import styles from './styles.module.scss'

export default function Player () {
  return(
    <section className={styles.container}>
      <div className={styles.playerContainer}></div>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h2>Aula 01 - Criando o projeto e realizando o setup inicial</h2>
          <p>Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.</p>
        </div>
        <div className={styles.buttonContainer}>
          <a href="#" className={styles.buttonYoutube}><BsYoutube />Visitar Canal</a>
          <a href="#" className={styles.buttonDiscord}><SiDiscord />Comunidade no Discord</a>
        </div>
      </div>
    </section>
  )
} 