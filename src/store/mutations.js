import * as types from './mutation-types'

export default {
  // 设置经度和纬度
  [types.RECEIVE_LOCATION] (state, pos) {
    state.latitude = pos.latitude
    state.longitude = pos.longitude
  }
}
