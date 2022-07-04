import react, { FormEvent, useState, MouseEvent } from 'react'
import styles from './Form.module.scss'
import { AnimateSharedLayout, motion, useDragControls } from 'framer-motion';
import { useMutation, gql } from '@apollo/client';
import FormOverlay from './overlay/Overlay';


const SHORTEN_URL = gql`mutation CREATE_SHORTEN_URL($data: UrlDataInput!) {
  createShortenerUrl(data: $data) {
    id
    shortId
    url
    createdAt
  }
}`

const Form: react.FC = () => {
  const dragControls = useDragControls();
  const variants = {
    hidden: {
      left: 30,
      opacity: 0,
    },
    initial: {
      left: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: .7,
        staggerChildren: 0.2
      }
    }
  }
  const inputVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    initial: {
      opacity: 1,
      y: 0
    }
  }

  const [shortenUrl, { data, loading, error }] = useMutation(SHORTEN_URL);
  const [showOverlay, setShowOverlay] = useState(false);
  const [url, setUrl] = useState('');

  const shortenMutation = async (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement | MouseEvent>) => {
    e.preventDefault();
    setUrl('');
    setShowOverlay(true);
    try {
      await shortenUrl({
        variables: {
          data: {
            url,
          }
        }
      })
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={styles.wrapper}>
      <motion.h2 
        style={{ position: 'relative' }}
        initial={{ opacity: 0, right: 30 }}
        animate={{ opacity: 1, right: 0 }}
        className={styles.slogan}>
        the<br/>shorter,<br/> the<br/> better
      </motion.h2>
      <motion.div 
        className={styles.tab}
        style={{ position: 'relative' }}
        initial="hidden"
        animate={["initial"]}
        drag="x"
        dragControls={dragControls}
        dragConstraints={{left: -20, right: 20}}
        variants={variants}
      >
        <div 
          onPointerDown={(e) => {
            dragControls.start(e);
          }}
          className={styles.tab__header}>
          <div className={styles.spans}>
            <span 
              className={styles.close} />
            <span 
              className={styles.resize} />
            <span 
              className={styles.min} />
          </div>
          <h3 className={styles.tab_title}>shortql</h3>
        </div>
        <div className={styles.tab__content_wrapper}>
          <div className={styles.tab__content}>
              <form className={styles.form} onSubmit={(e) => shortenMutation(e)}>
                <motion.input 
                  variants={inputVariants}
                  placeholder='URL'
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  type="text" />
                <motion.button 
                  variants={inputVariants}
                  onClick={(e) => shortenMutation(e)}
                  className={`btn ${styles.btn_shorten}`}>
                  shorten
                </motion.button>
              </form>
              { showOverlay && <FormOverlay 
                data={data} 
                error={error}
                loading={loading} 
                setShowOverlay={setShowOverlay}
                /> }
          </div>
        </div>
      </motion.div>
    </div>
  )
}


export default Form
