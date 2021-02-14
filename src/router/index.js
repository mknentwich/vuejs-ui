import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ShopHome from '../views/shop/Home.vue'
import ScoreDetails from '../views/shop/Detail.vue'
import Checkout from '../views/shop/Checkout.vue'
import Confirm from '../views/shop/ConfirmOrder.vue'
import Contact from '../views/Contact.vue'
import Biography from '../views/Biography.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: ShopHome
  },
  {
    path: '/shop/checkout',
    name: 'Checkout',
    component: Checkout,
    meta: { hideCart: true }
  },
  {
    path: '/shop/confirmOrder',
    name: 'ConfirmOrder',
    component: Confirm,
    meta: { hideCart: true }
  },
  {
    path: '/score/:scoreId',
    name: 'ScoreDetails',
    component: ScoreDetails
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/biography',
    name: 'Biography',
    component: Biography
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
})

export default router
