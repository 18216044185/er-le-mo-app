<template>
  <section class="buy">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0;visibility:hidden">
      <defs><symbol viewBox="0 0 44 44" id="cart-add">
        <path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clip-rule="evenodd"></path></symbol><symbol viewBox="0 0 44 44" id="cart-minus"><path fill="none" d="M0 0h44v44H0z"></path><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path></symbol><symbol viewBox="0 0 24 32" id="cart-remove"><path fill="#bbb" fill-rule="evenodd" d="M21.5 10h-19c-1.1 0-1.918.896-1.819 1.992l1.638 18.016C2.419 31.104 3.4 32 4.5 32h15c1.1 0 2.081-.896 2.182-1.992l1.637-18.016A1.798 1.798 0 0 0 21.5 10zM8 28H5L4 14h4v14zm6 0h-4V14h4v14zm5 0h-3V14h4l-1 14zm2-24h-2.941l-.353-2.514C17.592.669 16.823 0 15.998 0H8c-.825 0-1.593.668-1.708 1.486L5.94 4H3a3 3 0 0 0-3 3v1h24V7a3 3 0 0 0-3-3zM8.24 2h7.52l.279 2H7.96l.28-2z"></path></symbol><symbol viewBox="0 0 14 16" id="cart"><path fill="#FFF" fill-rule="evenodd" d="M12.364 2.998H2.088L1.816.687a.455.455 0 0 0-.478-.431L.431.303A.454.454 0 0 0 0 .78l1.256 10.893c.006.293.011 1.325.933 1.325h9.546a.455.455 0 0 0 .455-.454v-.881a.454.454 0 0 0-.455-.455H3.05l-.11-.937h8.606c.998 0 1.889-.724 1.989-1.616l.455-4.04c.1-.893-.628-1.617-1.626-1.617zm-.45 4.245c-.075.669-.317 1.212-1.066 1.212H2.727L2.3 4.812h8.821c.749 0 1.065.543.99 1.212l-.197 1.219zM2.416 15.79a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9.092 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></symbol><symbol viewBox="0 0 13 13" id="icon-warn"><g fill="none" fill-rule="evenodd"><circle cx="6.5" cy="6.5" r="6.5" fill="#FF5339"></circle><path fill="#FFF" d="M6 3h1v5H6zM6 9h1v1H6z"></path></g></symbol>
      </defs>
    </svg>
    <div class="sub" @click="subCart(food)" v-show="food.count">
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use>
      </svg>
    </div>
    <div class="count" v-show="food.count">{{food.count}}</div>
    <div class="add" @click="addCart(food, $event)">
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    food: {
      type: Object,
      required: true
    }
  },
  methods: {
    // 添加商品到购物车
    addCart (food, evt) {
      // 如果已经有了count,就++，否则就设置为1
      if (food.count) {
        food.count++
      } else {
        // food.count = 1 // 不能直接添加属性，否则就失去了响应式特点
        this.$set(food, 'count', 1)
      }
      // 向父组件goods emit一个事件
      this.$emit('dropBall', evt.target)
    },
    // 从购物车中减少商品
    subCart (food) {
      if (food.count) {
        food.count--
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .buy {
    font-size: .346667rem;
    width: 120px;
    position: relative;
    svg {
      width: 40px;
      height: 40px;
      fill: #3190e8;
    }
    div {
      width: 40px;
      height: 40px;
      line-height: 40px;
      position: absolute;
      top: 0;
    }
    .sub {
      left: ;
    }
    .add {
      right: 0;
    }
    .count {
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      line-height: 40px;
    }
  }
</style>
