/**
 * Component: CommunityCard
 * 
 * Description: Show a single community information
 * 
 * Props: 
 *   community: the information about this community, include id, name, imgUrl and group
 * State: N/A
 * 
 * Author: WeiYan
 * Date: 3rd, Mar, 2020
 */

import React from 'react'
import styles from './CommunityCard.module.css'


const CommunityCard = ({community}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        {
          community.imgUrl
          ? <img className={styles.img} src={community.imgUrl} alt={community.name} />
          : <img className={styles.img} src='house_sale.svg' alt={community.name} />
        }
      </div>
      <div className={styles.infoContainer}>
        <h3>{community.name}</h3>
        <i className={styles.group}>{community.group}</i>
        <p><span>Avg Price: </span><span className={styles.price}>{community.price}</span></p>
      </div>
    </div>
  )
}

export default CommunityCard