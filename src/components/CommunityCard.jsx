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
import './CommunityCard.css'


const CommunityCard = ({community}) => {
  return (
    <div className='card'>
      <div className='img-container'>
        {
          community.imgUrl
          ? <img className='img' src={community.imgUrl} alt={community.name} />
          : <img className='img' src='house_sale.svg' alt={community.name} />
        }
      </div>
      <div className='info-container'>
        <h3>{community.name}</h3>
        <i className='group'>{community.group}</i>
        <p><span>Avg Price: </span><span className='price'>{community.price}</span></p>
      </div>
    </div>
  )
}

export default CommunityCard