import react, { Dispatch, SetStateAction } from 'react'
import styles from './Overlay.module.scss'
import { ApolloError } from '@apollo/client';
import FormOverlayWrapper from '../overlay_wrapper/OverlayWrapper';


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
          {error 
            ? <span> 
              {error.message === 'Argument Validation Error' ? 'please enter valid url' : 'failed to fetch'}
            </span>
            : <a href={`http://localhost:3000/${data.createShortenerUrl.shortId}`}>
              http://localhost:3000/{data.createShortenerUrl.shortId}
            </a>
          }
        </div>
      </div>
    </FormOverlayWrapper>
  )
}

export default FormOverlay;
