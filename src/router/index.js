import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
// import jumpAnchor from '../utils/dom.js'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import ( /* webpackChunkName: "about" */ '../views/About.vue')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.path === from.path) {
    console.log(from)
    console.log(savedPosition)
    }
    else{
      if (to.hash) {
        return {
          selector: to.hash
        }
      }
    }
  }
})

export default router
