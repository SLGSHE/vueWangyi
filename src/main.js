import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import 'amfe-flexible'
import '../src/components/mockData/mockServe'

// import { Swipe, SwipeItem } from 'vue-swipe';

// //注册轮播图
// Vue.component('swipe', Swipe);
// Vue.component('swipe-item', SwipeItem);

//引入路由器
import router from './router'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
