import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
// 定义初始状态
const state = {
  latitude: '', // 经度
  longitude: '' // 纬度
}

Vue.use(Vuex)
// 创建store并导出
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
