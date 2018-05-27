import axios from 'axios'
// 获取天气预报
export function getWeather (latitude, longitude) {
  let url = 'https://restapi.ele.me/bgs/weather/current'
  let params = {latitude, longitude}
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// 获取搜素关键字
export function getHotSearch (latitude, longitude) {
  let url = 'https://restapi.ele.me/shopping/v3/hot_search_words'
  let params = {latitude, longitude}
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
// 获取食品导航入口
export function getFoodEntries (latitude, longitude) {
  let url = 'https://restapi.ele.me/shopping/v2/entries'
  let params = {latitude, longitude, 'templates[]': 'main_template'}
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
// 获取推荐商家
export function getRestaurants (latitude, longitude, offset, limit) {
  let url = 'https://restapi.ele.me/shopping/restaurants'
  let params = {latitude, longitude, offset, limit, 'extras[]': 'activities', 'terminal': 'h5'}
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
