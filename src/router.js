import Vue from 'vue'
import VueRouter from 'vue-router'

import PageList from './components/PageList.vue'
import PagePost from './components/PagePost.vue'
import Home from './components/Home.vue'
import AboutMe from './components/AboutMe.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/all',
    name: 'page-list',
    component: PageList
  },
  {
    path: '/post/:hash',
    name: 'page-post',
    component: PagePost
  },
  {
    path: '/about',
    name: 'about-me',
    component: AboutMe
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
