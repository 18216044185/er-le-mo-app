<template>
  <div>
    <header>
      <!-- 背景区域 -->
      <section class="header-bg" :style="{'backgroundImage':'url('+ bgUrl +')'}">
      </section>
      <!-- 返回按钮 -->
      <nav>
        <svg @click="$router.go(-1)">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use>
        </svg>
      </nav>
      <!-- 商家基本信息 -->
      <section class="main">
        <img :src="seller.image_path | imgUrl" v-if="seller.image_path">
        <div>
          <h2>{{seller.name}}</h2>
          <p class="delivery">
            <span v-if="seller.delivery_mode">{{seller.delivery_mode.text}}</span>
            <span v-else>商家配送</span>
            <em>{{seller.order_lead_time}}分钟送达</em>
            <strong>配送费{{seller.float_delivery_fee}}</strong>
          </p>
          <p class="notice">
            <span>公告：</span>
            <span>{{seller.promotion_info}}</span>
          </p>
        </div>
      </section>
      <!-- 活动 -->
      <section class="activity" @click="$refs.popup.open()">
        <div>
          <strong :style="{backgroundColor: '#' + seller.activities[0].icon_color}">{{seller.activities[0].icon_name}}</strong>
          <span>{{seller.activities[0].description}}</span>
        </div>
        <aside>
          {{seller.activities.length}}个活动
        </aside>
      </section>
    </header>
    <!-- 弹出层组件 -->
    <elm-popup ref="popup"
      :name="seller.name"
      :rating="seller.rating"
      :activities="seller.activities"
      :promotion="seller.promotion_info">
    </elm-popup>
  </div>
</template>

<script>
import Popup from './Popup'
export default {
  data () {
    return {
      bgUrl: ''
    }
  },
  props: {
    seller: {
      type: Object,
      required: true
    }
  },
  updated () {
    // console.log(this.seller.image_path)
    this.bgUrl = this.seller && this._bgUrl(this.seller.image_path)
  },
  methods: {
    // 处理背景图片
    _bgUrl (str) {
      let name = str.slice(0, 1) + '/' + str.slice(1, 3) + '/' + str.slice(3)
      // 使用正则获取图片的后缀名
      let matches = name.match(/jpeg|jpg|png$/)
      return `https://fuss10.elemecdn.com/${name}.${matches[0]}?imageMogr/format/webp/thumbnail/!40p/blur/50x40/`
    }
  },
  filters: {
    // 处理商家的logo图片
    imgUrl (str) {
      let name = str.slice(0, 1) + '/' + str.slice(1, 3) + '/' + str.slice(3)
      // 使用正则获取图片的后缀名
      let matches = name.match(/jpeg|jpg|png$/)
      return `https://fuss10.elemecdn.com/${name}.${matches[0]}?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/`
    }
  },
  components: {
    'elm-popup': Popup
  }
}
</script>

<style lang="less" scoped>
  header {
    position: relative;
    padding-bottom: .8rem;
    color: #fff;
    font-size: .293333rem;
    .header-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #3190e8;
      background-size: cover;
      background-repeat: no-repeat;
      z-index: -1;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(119,103,137,.43);
      }
    }
    nav {
      position: relative;
      padding: .106667rem .266667rem;
      svg {
        width: .666667rem;
        height:.666667rem;
      }
    }
    .main {
      padding: .266667rem .4rem 0;
      display: flex;
      img {
        width: 1.733333rem;
        height: 1.733333rem;
        border: 1px solid #fff;
        border-radius: .053333rem;
        margin: 0 .266667rem 0 0;
      }
      div {
        flex: 1;
        width: 7.2rem;
        h2 {
          font-size: .466667rem;
          line-height: 1.2em;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        p{
          height: .666667rem;
          line-height: .666667rem;
          white-space: nowrap;
        }
        .notice {
          height: .533333rem;
          line-height: .533333rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .activity{
      position: absolute;
      left: .4rem;
      right: .4rem;
      bottom:.133333rem;
      strong {
        margin-right: .16rem;
        font-size: .293333rem;
        width: .373333rem;
        height: .373333rem;
        line-height: .373333rem;
        text-align:  center;
        border-radius: .053333rem;
        display: inline-block;
      }
      aside {
        position: absolute;
        top: .066667rem;
        right: 0;
        &::after {
          content: '';
          display: block;
          border-width: .066667rem 0 .066667rem .08rem;
          border-style: solid;
          border-color: transparent transparent transparent #fff;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -.16rem;
        }
      }
    }
  }
</style>
