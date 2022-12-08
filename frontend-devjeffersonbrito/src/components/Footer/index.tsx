import {BsTelephone} from "react-icons/bs"
import {
  AiOutlineMail,
  AiOutlineInstagram, 
  AiOutlineLinkedin, 
  AiOutlineGithub
} from "react-icons/ai"
import {BiFile} from "react-icons/bi"
import styles from "./styles.module.scss"

export function Footer() {
  return (
    <footer
      id="footerContact"
      className={styles.footer}
    >
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <h3>Contact</h3>
          <span>
            <BsTelephone size={20}/>
            +55 (21) 972662427
          </span>
          <span>
            <AiOutlineMail size={20}/>
            jefferson.britotk@gmail.com
          </span>
          <span>
            <BiFile size={20}/>
            Download my CV
          </span>
        </div>
        <div className={styles.contentItem}>
          <h3>Social Media</h3>
          <span>
            <AiOutlineInstagram size={20}/>
            @devJeffersonBrito
          </span>
          <span>
            <AiOutlineGithub size={20}/>
            @jeffersontk
          </span>
          <span>
            <AiOutlineLinkedin size={20}/>
            @jeffersonsbrito
          </span>
        </div>
      </div>
        <div className={styles.contentFooter}>
          <span>
            Developed by Jefferson Brito in 2022
          </span>
        </div>
    </footer>
  )
}