import react from 'react'
import { motion } from 'framer-motion';
import styles from './Overlay.module.scss'


const FormOverlay: react.FC = () => {
  return (
    <motion.div className={styles.overlay}>
      <div 
        className={styles.overlay__message}>
        message  
      </div>
    </motion.div>
  )
}

export default FormOverlay;
