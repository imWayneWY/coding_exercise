/**
 * Component: ErrMsg
 * Description: Show an error message when there is an error
 * 
 * Props: 
 *  msg: the message of the error
 * State: N/A
 * 
 * Author: WeiYan
 * Date: 4th, Mar, 2020
 */

import React, {useState} from 'react'
import styles from './ErrMsg.module.css'
const ErrMsg = ({msg}) => {
  const [isShowing, setIsShowing] = useState('inline')
  const handleClick = () => {
    setIsShowing('none')
  }
  return (
    <div className={styles.alert} style={{display: isShowing}}>
      <span className={styles.closebtn} onClick={handleClick}>&times;</span> 
      <strong>{msg}</strong>
    </div>
  )
}

export default ErrMsg