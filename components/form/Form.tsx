import react from 'react'
import styles from './Form.module.scss'


const Form: react.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.slogan}>
        the<br/>shorter,<br/> the<br/> better
      </h2>
      <div className={styles.tab}>
        <div className={styles.tab__header}>
          <div className={styles.spans}>
            <span className={styles.close} />
            <span className={styles.resize} />
            <span className={styles.min} />
          </div>
          <h3 className={styles.tab_title}>shortql</h3>
        </div>
        <div className={styles.tab__content_wrapper}>
          <div className={styles.tab__content}>
            <div className={styles.form}>
              <input 
                placeholder='URL'
                type="text" />
              <button className={`btn ${styles.btn_shorten}`}>shorten</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Form
