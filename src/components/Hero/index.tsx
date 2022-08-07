import { useBreakpoint } from "../../hooks/useBreakpoint";
import styles from './styles.module.scss';

export function Hero(){
  const breakpoint = useBreakpoint();
  
  const isMobile = breakpoint === 'xs'

  return (
    <section className={styles.heroContainer}>
       {
        isMobile 
        ? <div className={styles.heroContentMobile}>
            <div className={styles.ContentMobile}>
              <span>Hello here is</span>
              <h1>
                Jefferson Brito
              </h1>
              <p>
              I am a Software engineer <br />
              specialized in
              </p>
              <span className={styles.frontend}>Front-end</span>
              <div className={styles.aboutMe}>
                <a href="#">About Me</a>
              </div>
            </div>
            
            <img src="/images/jeffersonbrito.svg" alt="" />
        </div>
        : <div className={styles.heroContentDesktop}>
            <div className={styles.ContentDesktop}>
              <span>Hello here is</span>
              <h1>
                Jefferson Brito
              </h1>
              <p>
              I am a Software engineer <br />
              specialized in
              </p>
              <span className={styles.frontendDesktop}>Front-end</span>
              <a className={styles.aboutMe} href="#">About Me</a>
            </div>
            <img src="/images/jeffersonbrito.svg" alt="" />
        </div>
       }
    </section>
  )
}