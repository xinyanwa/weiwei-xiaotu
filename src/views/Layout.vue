<template>
  <!-- 顶部通栏 -->
  <NavBar />

  <!-- 头部组件 -->
  <Header />
  <!-- <header>头部组件</header> -->

  <!-- 引入吸顶状态栏 -->
  <HeaderSticky />

  <!-- 中间组件 -->
  <div class="container">
    <router-view />
  </div>
  <!-- 底部组件 -->
  <Footer />
  <!-- <footer>底部组件</footer> -->

  <button @click="$store.commit('user/setUserInfo', {token: 3344, nickname: 'weiwei3344'})">登录</button>
  <button @click="$store.commit('user/setUserInfo', {})">退出</button>
</template>

<script>
// 引入顶部菜单栏
import NavBar from '@/components/app-navbar.vue'
// 引入头部导航栏
import Header from '@/components/app-header.vue'
// 引入尾部状态栏
import Footer from '@/components/app-footer.vue'
// 引入吸顶导航栏
import HeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'Layout',
  components: {
    NavBar,
    Header,
    Footer,
    HeaderSticky
  },

  // 在初始化的时候获取分类数据
  setup () {
    const store = useStore()
    // 要特别注意,因为我们已经开启了命名空间,所以调用的时候要写上名字
    store.dispatch('category/getList')
  }

  // setup () {
  //   const login = () => {

  //   }
  // }
}
</script>

<style lang="less">

.main{
  .hoverShadow();
  color: @weiweiColor;
}
</style>
