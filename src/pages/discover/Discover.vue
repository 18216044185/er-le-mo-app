<template>
  <section>
    <elm-navbar :goBack="true" title="发现"></elm-navbar>
    <h2>发现</h2>
    <elm-tabbar></elm-tabbar>
  </section>
</template>

<script>
import Navbar from '@/components/header/Navbar'
import Tabbar from '@/components/footer/Tabbar'
export default {
  components: {
    'elm-tabbar': Tabbar,
    'elm-navbar': Navbar
  }
}
</script>

<style lang="less" scoped>
</style>
