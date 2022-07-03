import react, { useState } from 'react'
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
    initial: {
      left: 0,
      opacity: 1
    }
    // TODO Add maximized
  }

  const [shortenUrl, { data, loading, error }] = useMutation(SHORTEN_URL);

  const shortenMutation = async () => {
    try {
      await shortenUrl({
        variables: {data: {url: 'https://google.com'}}
      })
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.slogan}>
        the<br/>shorter,<br/> the<br/> better
      </h2>
      <motion.div 
        className={styles.tab}
        style={{ position: 'relative' }}
        initial={{ left: 10, opacity: 0 }}
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
            <AnimateSharedLayout>
              <div className={styles.form}>
                <input 
                  placeholder='URL'
                  type="text" />
                <button 
                  onClick={() => shortenMutation()}
                  className={`btn ${styles.btn_shorten}`}>
                  shorten
                </button>
              </div>
              { data && <FormOverlay /> }
            </AnimateSharedLayout>
          </div>
        </div>
      </motion.div>
    </div>
  )
}


export default Form
