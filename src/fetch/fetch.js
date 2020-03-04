/**
 * fetch.js
 * Description: Define api connections
 */

import axios from 'axios';

const config = {
  baseURL: 'https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io',  // Server
  transformRequest: [
    function(data) {
      let ret = '';
        for (let it in data){
          ret += encodeURIComponent(it)+'='+encodeURIComponent(data[it])+'&'
        }
      return ret;
    }
  ],
  transformResponse: [
    function(data){
      return data
    }
  ],
  timeout: 10000,
  responseType: 'json'
}

const get = (url) => axios.get(url, config);

export const getCommunities = get('/communities');
export const getHomes = get('/homes');