import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Header.module.scss'

const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <div className={styles['header__top']}>
        <a href="/" className={styles['header__brand']}>
          Sela
        </a>
      </div>
      <div className={styles['header__content']}>
        <h1 className={styles['header__content__title']}>
          Keep track of development <br />
          projects near you
        </h1>
        <p className={styles['header__content__p']}>
          The Sela Platform enables stakeholders share real time information
          <br />
          on the state of infrastructure projects to ensure transparent delivery
        </p>

        <a href="/" className={styles['header__content__action']}>
          See Projects
          <br />
          <FontAwesomeIcon icon="angle-down" size="lg" color="white" />
        </a>
      </div>
      {children}
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.node
}

export default Header
