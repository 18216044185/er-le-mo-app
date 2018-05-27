<template>
  <header>
    <div class="navbar">
      <!-- 返回按钮 -->
      <section class="back" v-if="goBack" @click="back">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use>
        </svg>
      </section>
      <!-- 标题 -->
      <h1>{{title}}</h1>
    </div>
  </header>
</template>
<script>

export default {
  props: {
    goBack: { // 控制是否有返回按钮
      type: Boolean,
      default: false
    },
    title: { // 控制标题的
      type: String,
      default: ''
    }
  },
  methods: {
    back () {
      // 不在当前组件处理，需要告知给父组件
      this.$emit('back')
    }
  }
}
</script>

<style lang="less" scoped>
  header {
    height: 1.173333rem;
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 1.173333rem;
      background: #2395ff;
      background-image: linear-gradient(90deg,#0af,#0085ff);
      font-size: .48rem;
      color: #fff;
      .back {
        width: 1.173333rem;
        height: 1.173333rem;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          width: .586667rem;
          height: .586667rem;
        }
      }
      h1 {
        height: 1.173333rem;
        line-height: 1.173333rem;
        position: absolute;
        top: 0;
        left: 40%;
        transfrom: translateX(-50%);
        max-width: 50%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;
        font-size: 1em;
      }
    }
  }
</style>
