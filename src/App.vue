<template>
  <div id="app">
    <home-menu class="menu-top-left" />
    <header class="header">
      <router-link to="/">{{ title }}</router-link>
      <div style="clear: both"/>
      <!-- 只在pagelist页面显示 -->
      <search-bar v-if="isPageList"/> 
    </header>
    <router-view/>
    <footer-bar/>
  </div>
</template>

<style lang="stylus" src="./style/index.styl"></style>

<script>
  import conf from './config'
  import FooterBar from './components/FooterBar.vue'
  import SearchBar from './components/SearchBar.vue'
  import HomeMenu from './components/HomeMenu.vue'

  export default {
    name: 'App',

    components: {
      FooterBar,
      SearchBar,
      HomeMenu
    },

    data () {
      return {
        title: conf.blogTitle
      }
    },

    computed: {
      isPageList () {
        return this.$route.name === 'page-list'
      }
    }

  }
</script>
