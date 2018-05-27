import axios from 'axios'
// 使用原生geolocation获取定位信息
// export function fetchLocation () {
//   let options = {
//     timeout: 5000 // 超时时间
//   }
//
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition((pos) => {
//       resolve(pos)
//     }, (err) => {
//       reject(err)
//     }, options)
//   })
// }
// 使用百度api获取经纬度
/* eslint-disable */
export function fetchLocation() {
  // 配置选项
  let options = {
    enableHighAccuracy: true
  }
  let geolocation = new BMap.Geolocation()
  return new Promise((resolve, reject) => {
    geolocation.getCurrentPosition(function(r) {
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
         // console.log('您的位置：'+r.point.lng+','+r.point.lat)
        let pos = {
          coords: {
            latitude: r.point.lat,
            longitude: r.point.lng
          }
        }
        resolve(pos)
      }
      else {
        reject(this.getStatus())
      }
    },options)
  })
}


// 根据经纬度获取地址信息
export function getAddress (latitude, longitude) {
  let url = 'https://restapi.ele.me/bgs/poi/reverse_geo_coding'
  let params = {latitude, longitude}
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
// 获取关键字搜索地址
export function searchAddress (keyword) {
  let url = 'https://restapi.ele.me/bgs/poi/search_poi_nearby'
  let params = {keyword}
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then( res => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}
