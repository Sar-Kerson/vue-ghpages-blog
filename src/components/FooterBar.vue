<template>
  <footer class="footer">
    <div>Copyright © {{ thisYear }} | Powered by Leiqi Yao</div> 
    <a
      style="display: block;"
      href="https://github.com/Sar-Kerson"
      rel="noopener"
      target="_blank">
      <font-awesome-icon
        :icon="['fab', 'github']"
        class="fa-2x"/>
    </a>
  </footer>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faGithub } from '@fortawesome/fontawesome-free-brands'

  library.add(faGithub)

  export default {
    components: {
      FontAwesomeIcon
    },
    data () {
      return {
        thisYear: new Date().getFullYear()
      }
    }
  }
</script>


