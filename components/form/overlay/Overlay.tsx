import react, { Dispatch, SetStateAction } from 'react'
import { motion } from 'framer-motion';
import styles from './Overlay.module.scss'
import { ApolloError } from '@apollo/client';


// TODO Create props for component

interface FormOverlayProps {
  data?: any;
  error?: ApolloError | undefined;
  loading?: boolean;
  setShowOverlay: Dispatch<SetStateAction<boolean>>;
}

const FormOverlay: react.FC<FormOverlayProps> = ({data, error, loading, setShowOverlay}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration : 0.3} }}
      exit={{ opacity: 0 }}
      layout className={styles.overlay}>
      <div 
        className={styles.overlay__message}>
        <a href='#' className={styles.close} onClick={() => setShowOverlay(false)}></a>
        <div 
          className={styles.overlay__content}>
          <a href="http://localhost:3000/kkkkk">http://localhost:3000/ksksjd</a>
        </div>
      </div>
    </motion.div>
  )
}

export default FormOverlay;
