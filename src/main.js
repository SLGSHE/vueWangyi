import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import 'amfe-flexible'

//引入路由器
import router from './router'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
