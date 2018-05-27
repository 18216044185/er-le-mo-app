<template>
  <section>
    <!-- 导航头 -->
    <header>
      <div class="location" @click="openAddress">
        <svg class="icon-location">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
        </svg>
        <span>{{address.msg}}</span>
        <svg class="icon-arrow">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"></use>
        </svg>
      </div>
      <div class="weather" v-if="weather">
        <div>
          <h2>{{weather.temperature}}</h2>
          <p>{{weather.description}}</p>
        </div>
        <img :src="weather.image_hash | imgUrl">
      </div>
    </header>
    <!-- 搜索部分 -->
    <section class="search">
      <div>
        <a href="#">
          <svg>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
          </svg>
          <span>搜索饿了么商家、商品名称</span>
        </a>
      </div>
    </section>
    <!-- 热门搜索 -->
    <section class="hot-search">
      <ul>
        <li v-for="(item, index) in hotSearch" :key="index">
          {{item.search_word}}
        </li>
      </ul>
    </section>
    <!-- 首页内容  -->
  <section class="content" v-if="address.code == 1 || address.code == 0">
    <div class="entries">
      <svg v-if="foodEntries.length == 0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 490">
        <defs>
          <path id="b" d="M0 0h1080v489H0z"/>
          <filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox">
            <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
            <feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"/>
          </filter>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <g>
            <use fill="#000" filter="url(#a)" xlink:href="#b"/>
            <use fill="#FFF" xlink:href="#b"/>
          </g>
          <g fill="#F6F6F6">
            <g transform="translate(76 36)">
              <path d="M9 139h100v34H9z"/>
              <ellipse cx="59" cy="59" rx="59" ry="59"/>
            </g>
              <g transform="translate(346 36)">
                <path d="M9 139h100v34H9z"/>
                <ellipse cx="59" cy="59" rx="59" ry="59"/>
              </g>
              <g transform="translate(616 36)">
                <path d="M9 139h100v34H9z"/>
                <ellipse cx="59" cy="59" rx="59" ry="59"/>
              </g>
                <g transform="translate(886 36)">
                  <path d="M9 139h100v34H9z"/>
                  <ellipse cx="59" cy="59" rx="59" ry="59"/>
                </g>
              </g>
              <g fill="#F6F6F6">
                    <g transform="translate(76 252)">
                      <path d="M9 139h100v34H9z"/>
                      <ellipse cx="59" cy="59" rx="59" ry="59"/>
                    </g>
                      <g transform="translate(346 252)">
                        <path d="M9 139h100v34H9z"/>
                        <ellipse cx="59" cy="59" rx="59" ry="59"/>
                      </g>
                      <g transform="translate(616 252)">
                        <path d="M9 139h100v34H9z"/>
                        <ellipse cx="59" cy="59" rx="59" ry="59"/>
                      </g>
                      <g transform="translate(886 252)">
                        <path d="M9 139h100v34H9z"/>
                        <ellipse cx="59" cy="59" rx="59" ry="59"/>
                      </g>
                    </g>
                  </g>
      </svg>
        <mt-swipe v-else :auto="0">
          <mt-swipe-item v-for="(item1, index1) in foodEntries" :key="index1">
            <a href="#" v-for="(item2, index2) in item1" :key="index2">
              <img :src="item2.image_hash | imgUrl2" alt="">
              <span>{{item2.name}}</span>
            </a>
          </mt-swipe-item>
        </mt-swipe>
    </div>
    <h3>推荐商家</h3>
    <div class="restaurant">
      <div v-if="restaurants.length == 0">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 261"><defs><path id="b" d="M0 0h1080v260H0z"/><filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dy="-1" in="SourceAlpha" result="shadowOffsetOuter1"/><feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"/></filter></defs><g fill="none" fill-rule="evenodd" transform="translate(0 1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" xlink:href="#b"/><path fill="#F6F6F6" d="M230 44h533v46H230z"/><rect width="172" height="172" x="30" y="44" fill="#F6F6F6" rx="4"/><path fill="#F6F6F6" d="M230 118h369v30H230zM230 182h323v30H230zM812 115h238v39H812zM808 184h242v30H808zM917 48h133v37H917z"/></g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 261"><defs><path id="b" d="M0 0h1080v260H0z"/><filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dy="-1" in="SourceAlpha" result="shadowOffsetOuter1"/><feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"/></filter></defs><g fill="none" fill-rule="evenodd" transform="translate(0 1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" xlink:href="#b"/><path fill="#F6F6F6" d="M230 44h533v46H230z"/><rect width="172" height="172" x="30" y="44" fill="#F6F6F6" rx="4"/><path fill="#F6F6F6" d="M230 118h369v30H230zM230 182h323v30H230zM812 115h238v39H812zM808 184h242v30H808zM917 48h133v37H917z"/></g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 261"><defs><path id="b" d="M0 0h1080v260H0z"/><filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dy="-1" in="SourceAlpha" result="shadowOffsetOuter1"/><feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"/></filter></defs><g fill="none" fill-rule="evenodd" transform="translate(0 1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" xlink:href="#b"/><path fill="#F6F6F6" d="M230 44h533v46H230z"/><rect width="172" height="172" x="30" y="44" fill="#F6F6F6" rx="4"/><path fill="#F6F6F6" d="M230 118h369v30H230zM230 182h323v30H230zM812 115h238v39H812zM808 184h242v30H808zM917 48h133v37H917z"/></g>
        </svg>
      </div>
      <ul v-else>
        <li v-for="(item, index) in restaurants" :key="index" @click="goShop(item.id)" class="restaurant-item">
          <div class="shop-logo">
            <img :src="item.image_path | imgUrl2">
          </div>
          <div class="shop-info">
            <section class="title">
              <h2><strong v-if="item.is_premium">品牌</strong>{{item.name}}</h2>
              <aside>
                <ul>
                  <li v-for="(item1, index1) in item.supports" :key="index1">{{item1.icon_name}}</li>
                </ul>
              </aside>
            </section>
            <section class="sale">
              <p>
                <span>{{item.rating}}</span>
                <em>月售{{item.recent_order_num}}单</em>
              </p>
              <aside>
                <span v-if="item.delivery_mode">{{item.delivery_mode.text}}</span>
              </aside>
            </section>
            <section class="fee">
              <p>
                <span>￥{{item.float_minimum_order_amount}}起送</span>
                <em>配送费用￥{{item.float_delivery_fee}}</em>
              </p>
              <aside>
                  <span>{{item.distance | distance}}</span>
                  <em>{{item.order_lead_time}}分钟</em>
              </aside>
            </section>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <!-- 错误提示信息 -->
    <section class="nodata" v-if="address.code == 2 || address.code == 3">
      <img src="../../assets/images/location.gif" alt="">
      <h3>{{address.msg}}</h3>
      <button type="button" @click="openAddress">手动选择地址</button>
    </section>
    <elm-tabbar></elm-tabbar>
    <!-- 地址组件 -->
    <elm-address ref="address" :address="address"></elm-address>
  </section>
</template>

<script>
// 引入lodash底线库
import _ from 'lodash'
// 引入头部组件
import Tabbar from '@/components/footer/Tabbar'
// 引入获取地址组件
import Address from './Address'
// 引入vuex中方法
import { mapState, mapActions } from 'vuex'
// 引入封装api
import { getAddress } from '@/api/location'
import { getWeather, getHotSearch, getFoodEntries, getRestaurants } from '@/api/msite'
// 使用mint-ui库
import { Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vue from 'vue'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {
  data () {
    return {
      address: {
        code: 1,
        msg: '正在定位中...'
      },
      weather: null, // 天气信息
      hotSearch: [], // 热搜关键字
      foodEntries: [], // 食品导航入口
      restaurants: [], // 推荐商家
      page: 1, // 当前页数
      limit: 20, // 每一页显示的条数
      hasMore: true // 是否还有数据
    }
  },
  computed: {
    ...mapState([
      'latitude',
      'longitude'
    ])
  },
  components: {
    'elm-tabbar': Tabbar,
    'elm-address': Address
  },
  methods: {
    ...mapActions([
      'getLocation'
    ]),
    openAddress () {
      this.$refs.address.open()
    },
    // 实现商家页面的跳转
    goShop (id) {
      this.$router.push({path: '/shop', query: {id}, params: {id}})
    }
  },
  created () {
    this.getLocation().then(() => {
      getAddress(this.latitude, this.longitude).then(res => {
        // console.log(res)
        this.address = {
          code: 0,
          msg: res.data.address
        }
      }).then(() => {
        // 获取天气
        getWeather(this.latitude, this.longitude).then(res => {
          // console.log(res)
          this.weather = res.data
        }).catch(err => {
          console.log(err)
        })
      }).then(() => {
        // 获取热搜关键字
        getHotSearch(this.latitude, this.longitude).then(res => {
          this.hotSearch = res.data
        }).catch(err => {
          console.log(err)
        })
      }).then(() => {
        // 获取食品导航入口
        getFoodEntries(this.latitude, this.longitude).then(res => {
          this.foodEntries = _.chunk(res.data[0].entries, 8)
        }).catch(err => {
          console.log(err)
        })
      }).then(() => {
        let offset = (this.page - 1) * this.limit
        getRestaurants(this.latitude, this.longitude, offset, this.limit).then(res => {
          // console.log(res)
          // 判断是否有错误
          if (res.data.length) {
            res.data.forEach(item => {
              this.restaurants.push(item) // 保存数据
            })
            // console.log(this.restaurants)
            this.page++ // 修改page
          } else {
            this.hasMore = false // 设置hasMore
          }
        }).catch(err => {
          console.log(err)
        })
      }).catch(err => {
        console.log(err)
        this.address = {
          code: 2,
          msg: '地址出错了'
        }
      })
    }).catch(err => {
      console.log(err)
      this.address = {
        code: 3,
        msg: '不能获取定位'
      }
    })
  },
  filters: {
    imgUrl (str) {
      let name = str.slice(0, 1) + '/' + str.slice(1, 3) + '/' + str.slice(3)
      // 使用正则获取图片的后缀名
      let matches = name.match(/jpeg|jpg|png$/)
      return `https://fuss10.elemecdn.com/${name}.${matches[0]}?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/`
    },
    imgUrl2 (str) {
      let name = str.slice(0, 1) + '/' + str.slice(1, 3) + '/' + str.slice(3)
      // 使用正则获取图片的后缀名
      let matches = name.match(/jpeg|jpg|png$/)
      return `https://fuss10.elemecdn.com/${name}.${matches[0]}?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/`
    },
    // 处理距离
    distance (dis) {
      if (dis >= 1000) {
        return (dis / 1000).toFixed(2) + 'km'
      } else {
        return `${dis}米`
      }
    }
  }
}
</script>

<style lang="less" scoped>
header {
  padding: .266667rem .373333rem 0;
  background-image: linear-gradient(90deg,#0af,#0085ff);
  height: .92rem;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .location {
    display: flex;
    align-items: center;
    width: 60%;
    font-weight: 700;
    .icon-location {
      width: .346667rem;
      height: .413333rem;
      fill: #fff;
    }
    .icon-arrow {
      width: .186667rem;
      height: .093333rem;
      fill: #fff;
    }
    span {
      margin: 0 .133333rem;
      font-size: .453333rem;
      max-width: 80%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
.search {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
  background-image: linear-gradient(90deg,#0af,#0085ff);
  div {
    padding: .2rem .373333rem;
    margin: -.013333rem 0;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    width: 100%;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: .96rem;
      border-radius: .026667rem;
      background: #fff;
      color: #999;
      font-size: .373333rem;
      text-decoration: none;
      svg {
        width: .426667rem;
        height: .426667rem;
        margin-right: .133333rem;
      }
    }
  }
}
.hot-search {
  height: 0.96rem;
  padding: 0.2rem 0.373333rem 0.4rem;
  background-image: linear-gradient(90deg,#0af,#0085ff);
  width: 100%;
  margin-top: -2px;
  ul {
      width: 100%;
      height: 100%;
      white-space: nowrap;
      overflow-x: auto;
      display: inline-block;
      li {
        float: left;
        margin-right: .4rem;
        color: #fff;
      }
    }
}
.content {
  padding-bottom: 1.6rem;
  svg {
    width: 100%;
  }
  .entries {
    height: 4.72rem;
    background: #fff;
    a {
      float: left;
      width: 25%;
      margin-top: .293333rem;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        display: block;
        margin-top: .133333rem;
        color: #666;
        font-size: .32rem;
      }
    }
    .mint-swipe-indicator.is-active{
      background-color: #000;
      opacity: 0.7;
    }
  }
  h3 {
    margin-top: .266667rem;
    font-weight: 600;
    background:#fff;
    border-top: 1px solid #eee;
    font-size: .426667rem;
    padding: .426667rem .266667rem 0;
  }
  .restaurant {
    .restaurant-item {
      display: flex;
      justify-content: space-between;
      position: relative;
      border-bottom: 1px solid #eee;
      background: #fff;
      color: #666;
      font-size: .293333rem;
      .shop-logo {
        position: relative;
        padding: .4rem .266667rem;
        img {
          width: 1.733333rem;
          height: 1.733333rem;
          border-radius: .053333rem;
        }
      }
      .shop-info {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        padding: .4rem .266667rem .4rem .4rem;
        section {
          display: flex;
          justify-content: space-between;
        }
        .title {
          h2 {
            max-width: 5rem;
            height: .426667rem;
            color: #333;
            font-size: .4rem;
            font-weight: 700;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            strong {
              padding: .066667rem;
              height: .4rem;
              line-height: .4rem;
              border-radius: .053333rem;
              margin-right: .133333rem;
              background-image: linear-gradient(-139deg,#fff100,#ffe339);
              color: #6f3f15;
              text-align: center;
              font-size: .293333rem;
              font-weight: 700;
            }
          }
          aside ul {
            display: flex;
            li {
              font-size: .266667rem;
              width: .346667rem;
              height: .346667rem;
              line-height: .346667rem;
              text-align: center;
              border-radius: .013333rem;
              color: #999;
              border: 1px solid #ddd;
              margin-left: .08rem;
            }
          }
        }
        .sale {
          margin-top: .2rem;
          aside {
            span {
              background: linear-gradient(45deg,#0085ff,#0af);
              color: #fff;
              padding: 0 .053333rem;
              border: 1px solid #44a5ff;
              border-radius: .053333rem;
              font-size: .266667rem;
              height: .346667rem;
              line-height: .346667rem;
            }
          }
        }
        .fee {
          margin-top: .24rem;
          line-height: .32rem;
        }
      }
    }
  }
}
.nodata {
    margin-top: 4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
        margin: 0.333333rem 0 0.266667rem;
        color: #6a6a6a;
        font-weight: 400;
        font-size: 0.453333rem;
    }
    button {
        padding: 0.266667rem;
        min-width: 3.2rem;
        border: none;
        border-radius: 0.053333rem;
        background: #56d176;
        color: #fff;
        text-align: center;
        font-size: 1.2em;
    }
}
.weather {
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    text-align: center;
    font-weight: 400;
    h2 {
      font-size: .373333rem;
    }
    p {
      font-size: .266667rem;
    }
  }
  img {
    margin-left: .106667rem;
    width: .733333rem;
    height: .733333rem;
  }
}
</style>
