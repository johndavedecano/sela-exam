import React from 'react'

import styles from './PublicLayout.module.scss'

function PublicLayout({ children }) {
  return <div className={styles.layout}>{children}</div>
}

export default PublicLayout
