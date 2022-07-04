import react, { Dispatch, SetStateAction } from 'react'
import { motion } from 'framer-motion';
import styles from './Overlay.module.scss'
import { ApolloError } from '@apollo/client';
import FormOverlayWrapper from '../overlay_wrapper/OverlayWrapper';


// TODO Create props for component

interface FormOverlayProps {
  data?: any;
  error?: ApolloError | undefined;
  loading?: boolean;
  setShowOverlay: Dispatch<SetStateAction<boolean>>;
}

const FormOverlay: react.FC<FormOverlayProps> = ({data, error, loading, setShowOverlay}) => {
  if (loading) {
    return <FormOverlayWrapper>
      <div 
        className={styles.overlay__message}>
        <div 
          className={styles.overlay__content}>
          <div className={styles.lds_ring}><div></div><div></div><div></div><div></div></div>
        </div>
      </div>
    </FormOverlayWrapper>
  }
  return (
    <FormOverlayWrapper>
      <div 
        className={styles.overlay__message}>
        <a href='#' className={styles.close} onClick={() => setShowOverlay(false)}></a>
        <div 
          className={styles.overlay__content}>
          <a href="http://localhost:3000/kkkkk">ss</a>
        </div>
      </div>
    </FormOverlayWrapper>
  )
}

export default FormOverlay;
