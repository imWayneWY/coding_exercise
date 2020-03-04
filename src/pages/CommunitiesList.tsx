/**
 * Page:  CommunitiesList
 * 
 * Description: Show communities as a list
 * 
 * Props: N/A
 * State:
 *  communities: the communities' data after calculate avg price
 *  isFetching: whether frontend is fetching data
 *  isError: whether frontend is getting an error
 * 
 * Author: WeiYan
 * Date: 3rd, Mar, 2020
 */

import React, { useState, useEffect } from 'react'
import CommunityCard from '../components/CommunityCard'
import { getCommunities, getHomes } from '../fetch/fetch'
import Loading from '../components/Loading'
import ErrMsg from '../components/ErrMsg'
import styles from './CommunitiesList.module.css'

const errMsg: string = 'Ops! We got an error, please contact im.weiyan@foxmail to report. Thanks'

interface ICommunity {
  id: string,
  name: string,
  imgUrl: string,
  group: string,
  price: string
}

interface ICommunityPrice {
  communityId: string,
  prices: Array<number>,
}

const CommunitiesList = () => {

  const [communities, setCommunities] = useState<Array<ICommunity>>([])
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  
  useEffect(() => {
    setIsFetching(true)
    // fetch communities data
    getCommunities.then(resCommunities => {
      if (resCommunities.status === 200) {
        // fetch homes data
        getHomes.then(resHomes => {
          // store community's homes' price
          let communityPrices: Array<ICommunityPrice> = []
          if (resHomes.status !== 200) {
            setIsError(true)
            return
          }
          resHomes.data.forEach(home => {
            let selectCommunity = communityPrices.find(community => community.communityId === home.communityId)
            if (selectCommunity) {
              selectCommunity.prices.push(home.price)
            } else {
              selectCommunity = {
                communityId: home.communityId,
                prices: [home.price]
              }
              communityPrices.push(selectCommunity)
            }
          })

          // calculate communities avg price
          let communities = resCommunities.data.map(community => {
            let selectCommunity = communityPrices.find(communityPrice => communityPrice.communityId === community.id)
            if (selectCommunity) {
              const avgPrice = ( selectCommunity.prices.reduce((acc, val) => acc + val, 0) / selectCommunity.prices.length )
              community.price = Math.round(avgPrice).toLocaleString('en', {
                style: 'currency',
                currency: 'CAD',
                minimumFractionDigits: 0
              })
            } else {
              community.price = 'No home for sale'
            }
            return community;
          })
          // sort by alphabet
          .sort((community1, community2) => {
            let name1 = community1.name.toUpperCase();
            let name2 = community2.name.toUpperCase();
            if (name1 < name2) {
              return -1
            } else if (name1 > name2) {
              return 1
            } else {
              return 0
            }
          })
          setCommunities(communities)
        }).catch(err => {
          setIsError(true)
        })
      } else {
        setIsError(true)
      }
    }).catch(err => {
      // handle err
      setIsError(true)
    }).finally(() => {
      // end fetching
      setIsFetching(false)
    })
  }, [])

  // render communities list
  return(
    <div className={styles.root}>
      {
        isError
        ? <ErrMsg msg={errMsg}/>
        :(
          isFetching
          ? <Loading />
          : (communities.length > 0
            ? communities.map(community => <CommunityCard key={community.id} community={community}/>)
            : <p>No results for this searching</p>
            )
        )
      }
    </div>
  )
}

export default CommunitiesList
