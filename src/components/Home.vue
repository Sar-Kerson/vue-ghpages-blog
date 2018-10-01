<template>
  <div class="container-center">
    <img
      :src="imgSrc"
      class="img-home">
  </div>
</template>

<script>
  import conf from "../config"

  export default {
    data () {
      return {
        imgSrc: conf.home_img
      }
    }
  }
</script>

<style lang="stylus" scoped>

.container-center
  text-align center
.img-home
  width 80%

</style>
