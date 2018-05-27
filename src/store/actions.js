import {fetchLocation} from '@/api/location'
import * as types from './mutation-types'

export default {
  // 获取定位信息
  getLocation ({commit}) {
    return new Promise((resolve, reject) => {
      fetchLocation().then(pos => {
        commit(types.RECEIVE_LOCATION, pos.coords)
        resolve()
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  }
}
