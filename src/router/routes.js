import Home from '../pages//Home/Home.vue'
import List from '../pages/List/List.vue'
import Object from '../pages/Object/Object.vue'
import Person from '../pages/Person/Person.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'

import homesearch from '../pages/Search/HomeSearch.vue'

export default [
  {
    path: '/Home',
    component: Home,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/List',
    component: List,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/Object',
    component: Object,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/Person',
    component: Person,
    meta: {
      showFooter: false
    }
  },
  {
    path: '/ShopCart',
    component: ShopCart,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/search',
    component: homesearch
  },
  {
    path: '/',
    redirect: '/Home'
  }
]
