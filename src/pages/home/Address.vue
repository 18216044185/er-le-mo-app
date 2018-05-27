<template>
  <transition name="slide">
    <section class="address-wrapper" v-show="show">
      <elm-navbar :goBack="true" title="选择收货地址" @back="back"></elm-navbar>
      <form>
        <img src="../../assets/images/search.png" alt="">
        <input type="search" placeholder="请输入地址" v-model="keyword" @keyup.enter="search">
      </form>
      <div class="address">
        <h3>当前地址</h3>
        <div class="address-info">
          <strong>{{address.msg}}</strong>
          <span>
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#locate"></use>
            </svg>
            <em>重新定位</em>
          </span>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import Navbar from '@/components/header/Navbar'
import { searchAddress } from '@/api/location'
export default {
  data () {
    return {
      show: false, // 控制组件的显示和隐藏
      keyword: '', // 搜索关键字
      result: [] // 搜索结果
    }
  },
  props: {
    address: {
      type: Object
    }
  },
  methods: {
    // 显示address组件
    open () {
      this.show = true
    },
    back () {
      this.show = false
    },
    search (e) {
      // 调用api,获取结果，赋值给result
      e.preventDefault()
      searchAddress(this.keyword).then(res => {
        console.log(res)
        this.result = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  components: {
    'elm-navbar': Navbar
  }
}
</script>

<style lang="less" scoped>
.slide-enter-active,.slide-leave-active {transition: all 0.5s;}
.slide-enter,.slide-leave-active {transform: translateX(100%);}
.address-wrapper {
   position: fixed;
   left: 0;
   top: 0;
   bottom: 0;
   right: 0;
   z-index: 9999;
   background: #f4f4f4;
   form {
     position: relative;
     background: #fff;
     img {
       position: absolute;
       width: .373333rem;
       height: .373333rem;
       left: .693333rem;
       top: .586667rem;
     }
     input {
       border: none;
       outline: none;
       font-size: .346667rem;
       line-height: .48rem;
       margin: .266667rem .4rem;
       width: 9.2rem;
       height: .96rem;
       color: #999;
       border-radius: .026667rem;
       padding: .24rem .48rem .24rem .88rem;
       background: #f2f2f2;
     }
   }
   .address {
     h3 {
       padding: .4rem 0 .186667rem .4rem;
       color: #666;
     }
     .address-info {
       background: #fff;
       height: 1.173333rem;
       font-size: .4rem;
       color: #333;
       padding: 0 .453333rem 0 .4rem;
       display: flex;
       justify-content: space-between;
       align-items: center;
       strong {
         max-width: 75%;
         white-space: nowrap;
         overflow: hidden;
         text-overflow: ellipsis;
       }
       span {
         color: #2395ff;
         font-size: .373333rem;
         display: flex;
         justify-content: center;
         align-items: center;
         line-height: .4rem;
         svg {
           width: .4rem;
           height: .4rem;
           margin-right: .133333rem;
         }
       }
     }
   }
 }
</style>
