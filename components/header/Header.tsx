import Link from 'next/link'
import react from 'react'
import { motion } from 'framer-motion';
import styles from './Header.module.scss'

const Header: react.FC = () => {
  const logoVariants = {
    hidden: {
      left: -100,
      opacity: 0
    },
    visible: {
      left: 0,
      opacity: 1,
      transition: {
        duration: 2,
        type: 'spring',
        stiffness: 400,
        damping: 20
      }
    }
  }
  const iconVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }
  return (
    <header>
      <div className="wrapper">
        <nav className={styles.main_nav}>
          <Link href="/">
            <motion.a 
              style={{ position: 'relative' }}
              variants={logoVariants} 
              initial="hidden"
              animate="visible"
              className={styles.nav_title}>Short<span className={styles.nav_title__red}>QL</span></motion.a>
          </Link>
          <div>
            <a href="https://github.com/umtdemr/URL-Shortener-Frontend" className={styles.icon} rel="nofollow" target="_blank">
              <motion.svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <motion.path 
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    default: { duration: 1, ease: "easeInOut" },
                    fill: { duration: 1, ease: [1, 0, 0.8, 1] }
                  }}
                  />
              </motion.svg>
            </a>
          </div>
        </nav>
      </div>
    </header>)
}

export default Header
