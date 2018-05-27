<template>
  <div>
    <section class="goods">
      <!-- 左侧的导航 -->
      <nav class="menu">
        <ul>
          <li ref="menus" v-for="(item, index) in goods" :key="index" @click="selectCategory(index)" :class="{active: index==current}">
            <span v-if="item.icon_url"><img :src="item.icon_url | iconUrl" alt=""></span>
            {{item.name}}
          </li>
        </ul>
      </nav>
      <!-- 右边的主体内容 -->
      <div class="main">
        <div>
          <dl v-for="(item, index) in goods" :key="index" ref="dls">
            <dt><h3>{{item.name}} <small>{{item.description}}</small></h3></dt>
            <dd v-for="(food, index2) in item.foods" :key="index2">
              <img :src="food.image_path | imgUrl" v-if="food.image_path">
              <div class="food">
                <h4><span>{{food.name}}</span></h4>
                <p class="desc">{{food.description}}</p>
                <p class="sale">月售{{food.month_sales}}份 好评率是{{food.satisfy_rate}}%</p>
                <p class="price">
                  <strong><span>￥{{food.specfoods[0].price}}</span></strong>
                  <del v-if="food.specfoods[0].oldPrice">￥{{food.specfoods[0].oldPrice}}</del>
                </p>
                <div class="buy">
                  <elm-buy :food="food" @dropBall="dropBall"></elm-buy>
                </div>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </section>
    <!-- 购物车组件 -->
    <elm-cart ref="cart"
      :goods="goods"
      :fee="seller.float_delivery_fee"
      :minimun="seller.float_minimum_order_amount">
    </elm-cart>
  </div>
</template>

<script>
import IScroll from '../../../static/iscroll-probe'
import Buy from '@/components/buy/Buy'
import Cart from './Cart'
// console.log(IScroll)
export default {
  data () {
    return {
      current: 0, // 当前所在的分类，默认是第一个分类
      dlHeights: [] // 各个dl容器距离顶端的高度
    }
  },
  methods: {
    selectCategory (index) {
      this.current = index // 修改当前分类
      // console.log(this.$refs.dls[this.current])
      this.goodsScroll.scrollToElement(this.$refs.dls[this.current])
    },
    // 获取各容器到顶端的距离
    _getHeights () {
      this.dlHeights.push(0) // 第一个容器距离顶端的距离
      let dls = this.$refs.dls
      for (let i = 0; i < dls.length; i++) {
        this.dlHeights.push(this.dlHeights[i] + dls[i].clientHeight)
      }
    },
    // 触发小球下落
    dropBall (el) {
      this.$refs.cart.drop(el)
    }
  },
  props: {
    goods: {
      type: Array,
      required: true
    },
    seller: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.goodsScroll = new IScroll('.main', {probeType: 2})
      this.menuScroll = new IScroll('.menu')
      // 注册scroll事件
      let _this = this
      this.goodsScroll.on('scroll', function () {
        let dis = Math.abs(this.y)
        // console.log(dis)
        // 计算滚动到哪一个分类了
        for (let i = 0; i < _this.dlHeights.length; i++) {
          let start = _this.dlHeights[i]
          let end = _this.dlHeights[i + 1]
          if (dis >= start && dis <= end) {
            // console.log(`在第${i}个分类区域中`)
            _this.current = i
            // 同步滚动
            _this.menuScroll.scrollToElement(_this.$refs.menus[i])
            break
          }
        }
      })
    })
  },
  updated () {
    this.goodsScroll.refresh()
    // 调用_getHeights获取各容器的位置
    this._getHeights()
    // console.log(this.dlHeights)
  },
  filters: {
    // 处理icon图片
    iconUrl (str) {
      let name = str.slice(0, 1) + '/' + str.slice(1, 3) + '/' + str.slice(3)
      // 使用正则获取图片的后缀名
      let matches = name.match(/png|jpeg|jpg$/)
      return `https://fuss10.elemecdn.com/${name}.${matches[0]}?imageMogr/format/webp/thumbnail/18x/`
    },
    // 处理食品图片
    imgUrl (str) {
      let name = str.slice(0, 1) + '/' + str.slice(1, 3) + '/' + str.slice(3)
      // 使用正则获取图片的后缀名
      let matches = name.match(/png|jpeg|jpg$/)
      return `https://fuss10.elemecdn.com/${name}.${matches[0]}?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/`
    }
  },
  components: {
    'elm-buy': Buy,
    'elm-cart': Cart
  }
}
</script>

<style lang="less" scoped>
  .goods {
    position: fixed;
    left: 0;
    right: 0;
    top:4.812667rem;
    bottom: 1.28rem;
    overflow: hidden;
    display: flex;
    nav {
      width: 2.266667rem;
      min-width: 2.266667rem;
      ul {
        li {
          background-color: #f8f8f8;;
          font-weight: bolder;
          padding: .466667rem .2rem;
          border-bottom: 1px solid #ededed;
          font-size: .346667rem;
          color: #666;
          &.active {
            background: #fff;
          }
        }
      }
    }
    .main {
      flex-grow: 1;
      dt {
        position: relative;
        padding: .2rem .8rem .2rem .266667rem;
        background-color: #f1f1f1;
        h3 {
          font-size: .373333rem;
          font-weight: 700;
          color: #666;
          small {
            maring-left: .133333rem;
            color: #999;
            font-size: .266667rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      dd {
        position: relative;
        display: flex;
        min-height: 3.066667rem;
        box-shadow: 0.4rem 1px 0 0 #ddd;
        padding: .4rem .266667rem;
        background: #fff;
        img {
          height: 140px;
          height: 140px;
          margin-right: .266667rem;
        }
        .food{
          flex-grow: 1;
          position: relative;
          h4 {
            font-size: .4rem;
            font-weight: 700;
            line-height: 1.1;
          }
          p {
            margin:.173333rem 0;
            color: #666;
            font-size: .293333rem;
          }
          .buy {
            width: 120px;
            height: 40px;
            position: absolute;
            bottom: 10px;
            right: 0;
          }
        }
      }
    }
  }
</style>
