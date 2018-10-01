<template>
  <el-menu
    default-active="-1"
    mode="horizontal"
    background-color="#fffbed"
    text-color="#555"
    active-text-color="#555"
    @select="handleSelect">
    <el-menu-item index="1">Articles</el-menu-item>
    <el-menu-item index="2">AboutMe</el-menu-item>
  </el-menu>
</template>

<script>
  import Vue from 'vue'
  import ElementUI from 'element-ui'
  
  Vue.use(ElementUI)

  export default {
    data () {
      return {
      }
    },
    methods: {
      handleSelect ( key ) {
        if (key == "1") {
          this.$router.push({ name: 'page-list' })
        } else if (key == "2") {
          this.$router.push({ name: 'about-me' })
        }
      }
    }
  }
</script>

<style lang="css" scoped>
.el-menu-item {
  letter-spacing: 2px;
  text-transform: uppercase;
  height: 50px;
  line-height: 50px;
}
</style>

