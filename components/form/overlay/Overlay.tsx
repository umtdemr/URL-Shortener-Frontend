import react from 'react'
import { motion } from 'framer-motion';
import styles from './Overlay.module.scss'


const FormOverlay: react.FC = () => {
  return (
    <motion.div className={styles.overlay}>
      <div 
        className={styles.overlay__message}>
        <a href='#' className={styles.close}>x</a>
        <div 
          className={styles.overlay__content}>
          <a href="http://localhost:3000/kkkkk">http://localhost:3000/ksksjd</a>
        </div>
      </div>
    </motion.div>
  )
}

export default FormOverlay;
