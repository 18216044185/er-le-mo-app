<template>
  <div class="shop">
    <!-- 头部组件 -->
    <elm-top :seller="seller"></elm-top>
    <!-- 切换的导航 -->
    <nav>
      <ul>
        <li @click="current='elm-goods'" :class="{active:current=='elm-goods'}"><span>商品</span></li>
        <li @click="current='elm-ratings'" :class="{active:current=='elm-ratings'}"><span>评价</span></li>
        <li @click="current='elm-seller'" :class="{active:current=='elm-seller'}"><span>店铺</span></li>
      </ul>
    </nav>

    <!-- 动态组件 -->
    <component :is="current" :goods="goods" :seller="seller"></component>
  </div>
</template>

<script>
import Top from './Top'
import Goods from './Goods'
import Ratings from './Ratings'
import Seller from './Seller'

import { getGoods, getRatings, getRestaurants } from '@/api/shop'
export default {
  data () {
    return {
      current: 'elm-goods', // 动态组件中的当前组件
      goods: [], // 商品数据
      ratings: [], // 评价数据
      seller: {}, // 商家信息
      hasMore: true, // 评价数据的分页依据，是否还有数据
      page: 1, // 评价数据的第一页
      limit: 10 // 评价数据每页显示的条数
    }
  },
  mounted () {
    // console.log(this.$route.query.id)
    let id = this.$route.query.id
    // 调用api获取goods数据
    getGoods(id).then(res => {
      // console.log(res)
      this.goods = res.data
    }).catch(err => {
      console.log(err)
    })
    // 调用api获取评价数据
    let offset = (this.page - 1) * this.limit
    getRatings(id, this.hasMore, offset, this.limit).then(res => {
      // console.log(res)
      this.ratings = res.data
    }).catch(err => {
      console.log(err)
    })
    // 调用api获取商家信息
    getRestaurants(id).then(res => {
      // console.log(res)
      this.seller = res.data
    }).catch(err => {
      console.log(err)
    })
  },
  // 注册子组件
  components: {
    'elm-top': Top,
    'elm-goods': Goods,
    'elm-ratings': Ratings,
    'elm-seller': Seller
  }
}
</script>

<style lang="less" scoped>
  .shop {
    nav {
      line-height: 1.066667rem;
      height: 1.066667rem;
      background-color: #fff;
      border-bottom: 1px solid #eee;
      ul {
        display: flex;
        justify-content: space-around;
        font-size: .373333rem;
        color: #666;
        border-bottom: 1px solid #ddd;
        li.active{
          span {
            color: #3190e8;
            font-weight: 700;
            position: relative;
            z-index: 1;
            &::after {
              content: "";
              position: absolute;
              left: 0;
              right: 0;
              height: .08rem;
              bottom: -.266667rem;
              background: #2395ff;
            }
          }
        }
      }
    }
  }
</style>
