import axios from 'axios'

// 获取商品列表
export function getGoods (id) {
  let url = 'https://restapi.ele.me/shopping/v2/menu'
  let params = {restaurant_id: id}
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// 获取评价
export function getRatings (id, hasMore = true, offset = 0, limit = 10) {
  let url = `https://mainsite-restapi.ele.me/ugc/v2/restaurants/${id}/ratings`
  let params = {has_content: hasMore, offset, limit}
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// 获取商家信息
export function getRestaurants (id) {
  let url = `https://restapi.ele.me/shopping/restaurant/${id}?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification`
  let params = {}
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
