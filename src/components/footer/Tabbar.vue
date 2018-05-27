<template>
  <footer>
    <ul>
      <li @click="direct('/msite')">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="$route.path.indexOf('/msite') == -1 ? '#index-regular.b245d60' : '#index.18edf5a'"></use>
        </svg>
        <span :class="{active : $route.path.indexOf('/msite') != -1}">外卖</span>
      </li>
      <li @click="direct('/discover')">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="$route.path.indexOf('/discover') == -1 ? '#discover-regular.8ef537f' : '#discover.5811137'"></use>
        </svg>
        <span :class="{active : $route.path.indexOf('/discover') != -1}">发现</span>
      </li>
      <li @click="direct('/order')">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="$route.path.indexOf('order') == -1 ? '#order-regular.41c17f8' : '#order.070ae2a'"></use>
        </svg>
        <span :class="{active : $route.path.indexOf('/order') != -1}">订单</span>
      </li>
      <li @click="direct('/profile')">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="$route.path.indexOf('profile') == -1 ? '#profile-regular.c151d62' : '#profile.dbc5ebf'"></use>
        </svg>
        <span :class="{active : $route.path.indexOf('profile') != -1}">我的</span>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  methods: {
    direct (path) {
      this.$router.push(path)
    },
    created () {
      console.log(this.$route.path)
    }
  }
}
</script>

<style lang="less" scoped>
  footer {
    height: 1.6rem;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    ul {
      width: 100%;
      height: 100%;
      display :flex;
      justify-content: space-around;
      align-items: center;
      box-shadow: 0 -0.266667vw 0.533333rem rgba(0,0,0,.1);
    }
    svg {
      width: .533333rem;
      height: .533333rem;
    }
    span {
      display: block;
      margin-top: 0.1333rem;
      &.active {
        color: #0089dc;
      }
    }
  }
</style>
