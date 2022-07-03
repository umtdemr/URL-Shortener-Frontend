import react from 'react'
import { motion } from 'framer-motion';
import styles from './Overlay.module.scss'


// TODO Create props for component

const FormOverlay: react.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration : 0.3} }}
      exit={{ opacity: 0 }}
      layout className={styles.overlay}>
      <div 
        className={styles.overlay__message}>
        <a href='#' className={styles.close}></a>
        <div 
          className={styles.overlay__content}>
          <a href="http://localhost:3000/kkkkk">http://localhost:3000/ksksjd</a>
        </div>
      </div>
    </motion.div>
  )
}

export default FormOverlay;
