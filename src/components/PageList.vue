<template>
  <div>
    <el-checkbox-group 
      v-model="checkedCategory"
      :min="1"
      :max="4"
      text-color="#555"
      fill="#888">
      <el-checkbox 
        v-for="category in categories" 
        :label="category" 
        :key="category">
        {{ category }}
      </el-checkbox>
    </el-checkbox-group>
    <section class="list-view">
      <div
        v-if="loading"
        class="loading">loading..</div>
      <div
        v-else-if="orderedList.length === 0"
        class="no-content">nothing..</div>
      <ol
        v-else
        class="list">
        <li
          v-for="{ title, sha, date } in orderedList"
          :key="sha"
          class="list-item">
          <router-link
            :to="'/post/' + sha"
            class="item-title">
            {{ title }}
          </router-link>
          <br>
          <time
            :datetime="date | formatDate"
            :title="date | formatDate"
            pubdate="pubdate"
            class="item-date">{{ date | timeago }}</time>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
  import api from '../api'
  import conf from '../config'
  import Vue from 'vue'
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'

  Vue.use(ElementUI)

  export default {

    data () {
      return {
        checkedCategory: ['all'],
        categories: ['all'],
        lists: [],
        loading: true
      }
    },

    computed: {
      orderedList () {
        // Filter by title, Order by publish date, desc
        let tmp = this.lists
          .slice()
          .sort((itemA, itemB) => (new Date(itemB.date) - new Date(itemA.date)))
        return tmp
      }
    },

    watch: {
      '$route': 'loadList',
      async checkedCategory (newChecked) {
        await this.loadList()
        if (!newChecked.includes('all')) {
          this.lists = this.lists.filter(el => {
            return newChecked.includes(el.category)
          })
        }
        // this.loadList().then(() => {
        //   if (!newChecked.includes('all')) {
        //     this.lists = this.lists.filter(el => {
        //       return newChecked.includes(el.category)
        //     })
        //   }
        // }).catch(err => {
        //   console.log(err)
        // })
      }
    },

    async mounted () {
      window.document.title = conf.blogTitle
      await this.loadList()
      await this.loadCategory()
    },

    methods: {
      async loadList () {
        const { $route: { query } } = this
        this.loading = true
       
        this.lists = await (query.q ? api.searchFile : api.getList)(query.q)
          .catch(err => {
            this.loading = false
            // eslint-disable-next-line no-console
            return console.info('[loadList]', err)
          })
        this.loading = false
      },

      async loadCategory () {
        let t = await api.getCategories(this.lists)
          .catch(err => {
            return console.info('[loadCategory]', err)
          })
        this.categories = this.categories.concat(t)
      }
    }

  }

</script>
