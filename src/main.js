import Vue from 'vue'
// import * as siwper_animate from "../public/js/swiper.animate1.0.3.min.js"
import App from './App.vue'
import router from './router'
import store from './store'
// import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import {Menu, Submenu, MenuItem, Row, Col} from 'element-ui'

Vue.config.productionTip = false

Vue.prototype.$ELEMENT = { size: 'medium', zIndex: 3000 };
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)

/*** siwper.animate ***/
// Vue.prototype.$swiperAnimateCache = siwper_animate.swiperAnimateCache;
// Vue.prototype.$swiperAnimate = siwper_animate.swiperAnimate;
// Vue.prototype.$clearSwiperAnimate = siwper_animate.clearSwiperAnimate


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
