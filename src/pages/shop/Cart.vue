<template>
  <div>
    <!-- 购物车内容 -->
    <section class="cart" @click="toggleList">
      <div class="cart-left">
        <div class="cart-outer" :class="{active:count}">
          <svg v-if="count==0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 58 58">
              <defs>
                <filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox">
                  <feOffset in="SourceAlpha" result="shadowOffsetOuter1"/>
                  <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"/>
                  <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                  <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <path id="b" d="M7.614 4.051c-1.066.086-1.452-.398-1.752-1.584C5.562 1.28.33 5.88.33 5.88l3.71 19.476c0 .148-1.56 7.515-1.56 7.515-.489 2.19.292 4.27 3.56 4.32 0 0 36.917.017 36.92.047 1.979-.012 2.981-.995 3.013-3.039.03-2.043-1.045-2.978-2.987-2.993L8.83 31.192s.86-3.865 1.077-3.865c0 0-5.788.122 32.065-1.956.606-.033 2.018-.764 2.298-1.848 1.113-4.317 4.008-13.26 4.458-15.64.932-4.925 2.061-8.558-4.28-7.405 0 0-35.768 3.487-36.833 3.573z"/>
              </defs>
              <g fill="none" fill-rule="evenodd" filter="url(#a)" transform="translate(3 2)">
              <g transform="translate(5.038 7.808)">
                <mask id="c" fill="#fff">
                  <use xlink:href="#b"/>
                </mask>
                <use fill="#5F5F63" xlink:href="#b"/>
                <path fill="#EBEEF3" d="M53.962 7.774l-5.701 19.305-40.78 1.574z" mask="url(#c)" opacity=".05"/>
              </g>
                <path stroke="#5F5F63" stroke-linecap="round" stroke-width="6" d="M9.374 18.722S7.868 11.283 7.323 8.71C6.778 6.136 5.86 5.33 3.978 4.52 2.096 3.713.367 2.286.367 2.286"/>
                <circle cx="46" cy="51" r="4" fill="#5F5F63"/>
                <circle cx="12" cy="51" r="4" fill="#5F5F63"/>
              </g>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 58 58"><defs><filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><path id="b" d="M7.614 4.051c-1.066.086-1.452-.398-1.752-1.584C5.562 1.28.33 5.88.33 5.88l3.71 19.476c0 .148-1.56 7.515-1.56 7.515-.489 2.19.292 4.27 3.56 4.32 0 0 36.917.017 36.92.047 1.979-.012 2.981-.995 3.013-3.039.03-2.043-1.045-2.978-2.987-2.993L8.83 31.192s.86-3.865 1.077-3.865c0 0-5.788.122 32.065-1.956.606-.033 2.018-.764 2.298-1.848 1.113-4.317 4.008-13.26 4.458-15.64.932-4.925 2.061-8.558-4.28-7.405 0 0-35.768 3.487-36.833 3.573z"/></defs><g fill="none" fill-rule="evenodd" filter="url(#a)" transform="translate(3 2)"><g transform="translate(5.038 7.808)"><mask id="c" fill="#fff"><use xlink:href="#b"/></mask><use fill="#FFF" xlink:href="#b"/><path fill="#2073C1" d="M53.962 7.774l-5.701 19.305-40.78 1.574z" mask="url(#c)" opacity=".1"/></g><path stroke="#FFF" stroke-linecap="round" stroke-width="6" d="M9.374 18.722S7.868 11.283 7.323 8.71C6.778 6.136 5.86 5.33 3.978 4.52 2.096 3.713.367 2.286.367 2.286"/><circle cx="46" cy="51" r="4" fill="#FFF"/><circle cx="12" cy="51" r="4" fill="#FFF"/></g>
          </svg>
          <div class="badge" v-show="count">{{count}}</div>
          <!-- 小球 -->
          <div v-for="(ball, index) in balls" :key="index">
            <transition @before-enter="beforeEnter" @enter="enter" @aftre-enter="afterEnter">
              <div class="ball" v-show="ball.show">
                <div class="ball-inner">
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="cart-md">
        <p><strong>￥{{total}}</strong> <span>配送费￥{{fee}}</span></p>
      </div>
      <div class="cart-right" :class="{active : total >= minimun }">
        {{payDesc}}
      </div>
    </section>

    <!-- 购物车列表 -->
    <transition name="slide">
      <section class="cart-list" v-show="show">
        <div class="list-hd">
          <h2>购物车</h2>
          <span @click="clear">清空</span>
        </div>
        <ul class="list-bd">
          <li v-for="(item, index) in cartGoods" :key="index">
            <strong>{{item.name}}</strong>
            <span>￥{{item.count * item.specfoods[0].price}}</span>
            <div class="buy">
              <elm-buy :food="item"></elm-buy>
            </div>
          </li>
        </ul>
      </section>
    </transition>

    <!-- 遮罩层 -->
    <transition name="fade">
      <section class="mask" v-show="show">
      </section>
    </transition>
  </div>

</template>

<script>
import Buy from '@/components/buy/Buy'
export default {
  data () {
    return {
      show: false, // 是否显示购物车列表
      balls: [ // 5个小球，默认都是隐藏的
          {show: false},
          {show: false},
          {show: false},
          {show: false},
          {show: false}
      ],
      dropBalls: [] // 正在下落的小球
    }
  },
  props: {
    goods: {
      type: Array,
      required: true
    },
    fee: {
      type: Number,
      requried: true
    },
    minimun: {
      type: Number,
      requried: true
    }
  },
  computed: {
    // 购物车中的商品，需要循环两次
    cartGoods () {
      let arr = []
      this.goods.forEach(item => {
        item.foods.forEach(food => {
          if (food.count) {
            arr.push(food)
          }
        })
      })
      return arr
    },
    // 总的价格
    total () {
      let sum = 0
      this.cartGoods.forEach(food => {
        sum += food.specfoods[0].price * food.count
      })
      return sum
    },
    // 总的数量
    count () {
      let sum = 0
      this.cartGoods.forEach(food => {
        sum += food.count
      })
      return sum
    },
    // 支付信息
    payDesc () {
      if (this.total === 0) {
        return `￥${this.minimun}起送`
      } else if (this.total < this.minimun) {
        return `还差${this.minimun - this.total}￥起送`
      } else {
        return `去结算`
      }
    }
  },
  components: {
    'elm-buy': Buy
  },
  methods: {
    // 清空购物车
    clear () {
      this.cartGoods.forEach(food => {
        food.count = 0
      })
      // 清空的同时，需要将show设置为false
      this.show = false
    },
    // 切换购物车显示和隐藏
    toggleList () {
      // 购物车不为空，才修改
      if (this.cartGoods.length) {
        this.show = !this.show
      }
    },
    // 小球开始下落，其中el表示触发小球下落的添加按钮元素
    drop (el) {
      console.log(el)
      let count = this.balls.length
      while (count--) {
        // 获取ball对象
        let ball = this.balls[count]
        // 判断该小球的show是否为false
        if (!ball.show) {
          // 将其show设置为true
          ball.show = true
          // 同时将el保存到ball对象中
          ball.el = el
          // 将小球保存到dropBalls中
          this.dropBalls.push(ball)
          break
        }
      }
    },
    // 显示之前的那一瞬间
    beforeEnter () {
      console.log('before')
    },
    // 开始显示的那一瞬间
    enter () {
      console.log('enter')
    },
    // 显示完成之后
    afterEnter () {
      console.log('after')
    }
  }
}
</script>

<style lang="less" scoped>
// 控制购物车滑动效果
.slide-enter-active, .slide-leave-active {transition: all 0.5s ease;}
.slide-enter, .slide-leave-active {transform: translateY(100%);}
// 控制遮罩层效果
.fade-enter-active, .fade-leave-active {transition: all 0.5s ease;}
.fade-enter, .fade-leave-active {opacity: 0;}
.cart {
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1.28rem;
  background: rgba(61,61,63,.9);
  display: flex;
  .cart-left {
    width: 2.266667rem;
    position: relative;
    .cart-outer {
      width: 1.333333rem;
      height: 1.333333rem;
      border-radius: 100%;
      border: .133333rem solid #444;
      position: absolute;
      left:.32rem;
      bottom: .2rem;
      background-image: radial-gradient(circle,#363636 .626667rem,#444 0);
      svg {
        display: block;
        width: .6rem;
        height: .6rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      &.active {
        background-color: #3190e8;
        background-image: none;
        svg {
          fill: #fff;
        }
      }
      .badge {
        font-size: .266667rem;
        background: #ff461d;
        color: #fff;
        padding: .053333rem .133333rem;
        border-radius: .32rem;
        line-height: 1;
        position: absolute;
        right: -.12rem;
        top: -.133333rem;
      }
      .ball {
        position: absolute;
        width: 40px;
        height: 40px;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        .ball-inner {
          width: 100%;
          height: 100%;
          background: #3190e8;
          border-radius: 50%;
        }
      }
    }
  }
  .cart-md {
    line-height: 1.28rem;
    flex-grow: 1;
    color: #fff;
    strong {
      font-size: .48rem;
      font-weight: 700;
      margin-right: .133333rem;
    }
  }
  .cart-right {
    width: 2.8rem;
    text-align: center;
    line-height: 1.28rem;
    color: #fff;
    font-size: .4rem;
    background-color: #535356;
    &.active {
      background-color: #4cd964;
      color: #fff;
    }
  }
}
.cart-list {
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 1.28rem;
  background: #fff;
  .list-hd {
    position: relative;
    padding: .4rem .333333rem;
    border-bottom: 1px solid #ddd;
    background-color: #eceff1;
    color: #666;
    h2 {
      padding: .1rem .133333rem;
      border-left: .093333rem solid #3190e8;
    }
    span {
      position: absolute;
      right: .333333rem;
      top: 50%;
      transform: translateY(-50%);
      font-size: .346667rem;
    }
  }
  .list-bd {
    max-height: 8rem;
    overflow: auto;
    li {
      position: relative;
      height: 1.466667rem;
      line-height: 1.466667rem;
      margin-left: .333333rem;
      font-size: .426667rem;
      .buy {
        width: 120px;
        height: 40px;
        position: absolute;
        right: .1rem;
        top: .2rem;
      }
      &:not(:last-child) {
        border-bottom: 1px solid #eee;
      }
      span {
        position: absolute;
        right: 160px;
        color: #f60;
      }
    }
  }
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  opacity: .4;
}
</style>
