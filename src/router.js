import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: () => import('./components/recommend/Recommend.vue')
    },
    {
      path: '/singer',
      component: () => import('./components/singer/Singer.vue')
    },
    {
      path: '/rank',
      component: () => import('./components/rank/Rank.vue')
    },
    {
      path: '/saerch',
      component: () => import('./components/search/Search.vue')
    }
  ]
})
