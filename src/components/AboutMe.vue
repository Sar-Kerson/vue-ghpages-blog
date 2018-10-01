<template>
  <div class="about-container">
    <img :src="meImg">
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
import meImg from '../assets/imgs/me.jpg'
import conf from '../config'

export default {
  
  data () {
    return {
      meImg: meImg,
      title: conf.aboutMeTitle,
      subtitle: conf.aboutMeSubtitle,
      content: conf.aboutMeContent
    }
  }
}
</script>

<style lang="stylus" scoped>
.about-container
  img 
    width 50%
    display inline-block
    float left
    padding 100px 0
  div
    width 50%
    text-align center
    display inline-block
    p
      white-space pre-line
</style>
