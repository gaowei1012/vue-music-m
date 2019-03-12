import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import router from './router'

Vue.use(VueLazyload)

fastclick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
