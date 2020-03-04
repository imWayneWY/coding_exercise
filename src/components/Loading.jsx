/**
 * Component： Loading
 * Description: Show a loading icon when the frontend is fetching data
 * 
 * Props: N/A
 * State: N/A
 * 
 * Author: WeiYan
 * Date: 4th, Mar, 2020
 */

import React from 'react'
import './Loading.css'

const Loading = () => {
  return(
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}

export default Loading;