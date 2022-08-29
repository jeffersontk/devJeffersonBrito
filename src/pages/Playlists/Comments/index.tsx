import { useState } from 'react'
import { AiFillFacebook, AiFillGoogleSquare, AiFillLike, AiOutlineSend } from 'react-icons/ai'
import { FaGithubSquare} from 'react-icons/fa'
import styles from './styles.module.scss'

export default function Comments () {
  const [isLogin, setIsLogin] = useState(false)
  return(
    <section className={styles.container}>
      {!isLogin && 
        <div className={styles.loginContainer}>
          <h3>login and leave a comment</h3>
          <div className={styles.buttonContainer}>
            <button 
              className={styles.buttonGithub}
              onClick={()=> setIsLogin(!isLogin)}
            >
              <FaGithubSquare />Login with github
            </button>
            <button 
              className={styles.buttonGoogle}  
              onClick={()=> setIsLogin(!isLogin)}
            >
              <AiFillGoogleSquare /> Login with Google
            </button>
            <button 
              className={styles.buttonFacebook}  
              onClick={()=> setIsLogin(!isLogin)}
            >
              <AiFillFacebook /> Login with Facebook
            </button>
          </div>
        </div>
      }
      <div className={styles.commentContainer}>
        {
          isLogin && 
            <div className={styles.commentInput}>
              <div className={styles.avatar}></div>
              <div className={styles.inputContainer}>
                <input type="text"  placeholder='Add a comment'/>
                <AiOutlineSend />
              </div>
            </div>
        }
        <div className={styles.commentList}>
          <div className={styles.commentContent}>
            <div className={styles.avatar} />
            <div className={styles.comment}>
              <div className={styles.commentUser}>
                <span>Jefferson Brito</span>
                <time>1 dia atrás</time>
              </div>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat ut neque elementum viverra id amet. Vel vel pellentesque purus, vestibulum, urna enim proin neque. Semper suscipit adipiscing neque, bibendum neque donec viverra semper. Phasellus ultricies ut facilisi adipiscing magna. Etiam mattis lectus feugiat lorem risus, vulputate. Placerat ac egestas sed aliquet facilisis massa scelerisque. Id ultrices enim donec nunc, viverra integer suspendisse sodales justo. Tortor egestas purus accumsan pellentesque facilisi amet dui sem urna.
  Sagittis sed faucibus sagittis id sagittis sed enim enim.
              </p>
              <span className={styles.like}><AiFillLike /> 4</span>
            </div>
          </div>
          <div className={styles.commentContent}>
            <div className={styles.avatar} />
            <div className={styles.comment}>
              <div className={styles.commentUser}>
                <span>Jefferson Brito</span>
                <time>1 dia atrás</time>
              </div>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat ut neque elementum viverra id amet. Vel vel pellentesque purus, vestibulum, urna enim proin neque. Semper suscipit adipiscing neque, bibendum neque donec viverra semper. Phasellus ultricies ut facilisi adipiscing magna. Etiam mattis lectus feugiat lorem risus, vulputate. Placerat ac egestas sed aliquet facilisis massa scelerisque. Id ultrices enim donec nunc, viverra integer suspendisse sodales justo. Tortor egestas purus accumsan pellentesque facilisi amet dui sem urna.
  Sagittis sed faucibus sagittis id sagittis sed enim enim.
              </p>
              <span className={styles.like}><AiFillLike /> 4</span>
            </div>
          </div>
          <div className={styles.commentContent}>
            <div className={styles.avatar} />
            <div className={styles.comment}>
              <div className={styles.commentUser}>
                <span>Jefferson Brito</span>
                <time>1 dia atrás</time>
              </div>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat ut neque elementum viverra id amet. Vel vel pellentesque purus, vestibulum, urna enim proin neque. Semper suscipit adipiscing neque, bibendum neque donec viverra semper. Phasellus ultricies ut facilisi adipiscing magna. Etiam mattis lectus feugiat lorem risus, vulputate. Placerat ac egestas sed aliquet facilisis massa scelerisque. Id ultrices enim donec nunc, viverra integer suspendisse sodales justo. Tortor egestas purus accumsan pellentesque facilisi amet dui sem urna.
  Sagittis sed faucibus sagittis id sagittis sed enim enim.
              </p>
              <span className={styles.like}><AiFillLike /> 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 