import react from 'react'
import styles from './Form.module.scss'
import { motion, useDragControls } from 'framer-motion';


const Form: react.FC = () => {
  const dragControls = useDragControls();
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.slogan}>
        the<br/>shorter,<br/> the<br/> better
      </h2>
      <motion.div 
        className={styles.tab}
        style={{position: 'relative'}}
        initial={{ left: 10, opacity: 0 }}
        animate={{ left: 0, opacity: 1 }}
        transition={{duration: 0.5}}
        drag="x"
        dragControls={dragControls}
        dragConstraints={{left: -20, right: 20}}
      >
        <div 
          onPointerDown={(e) => {
            dragControls.start(e);
          }}
          className={styles.tab__header}>
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
      </motion.div>
    </div>
  )
}


export default Form
