/**
 * Page: Index
 * Description: index page of this project
 * 
 * Props: N/A
 * States: N/A
 * 
 * Author: WeiYan
 * Date: 4th, Mar, 2020
 */

import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Index.module.css'

const Index = () => {
  return (
    <div className={styles.root}>
      <Link className={styles.btn} to="/communities">
        Communities Demo
      </Link>
      <Link className={styles.btn} to="/readme">
        README.md
      </Link>
    </div>
  )
}

export default Index