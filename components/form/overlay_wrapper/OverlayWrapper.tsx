import react from 'react'
import { motion } from 'framer-motion';
import styles from './OverlayWrapper.module.scss'


interface FormOverlayWrapperProps {
  children: react.ReactNode;
}


const FormOverlayWrapper: react.FC<FormOverlayWrapperProps> = ({ children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration : 0.3} }}
      exit={{ opacity: 0 }}
      layout 
      layoutId='modal'
      className={styles.overlay}>
      {children}
    </motion.div>
  )
}

export default FormOverlayWrapper;
