import Home from '../pages//Home/Home.vue'
import List from '../pages/List/List.vue'
import Object from '../pages/Object/Object.vue'
import Person from '../pages/Person/Person.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'


export default [
  {
    path: '/Home',
    component: Home,

  },
  {
    path: '/List',
    component: List
  },
  {
    path: '/Object',
    component: Object
  },
  {
    path: '/Person',
    component: Person
  },
  {
    path: '/ShopCart',
    component: ShopCart
  },
  {
    path: '/',
    redirect: '/Home'
  }
]
