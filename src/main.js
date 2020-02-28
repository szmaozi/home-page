import Vue from 'vue'
// import * as siwper_animate from "../public/js/swiper.animate1.0.3.min.js"
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

/*** siwper.animate ***/
// Vue.prototype.$swiperAnimateCache = siwper_animate.swiperAnimateCache;
// Vue.prototype.$swiperAnimate = siwper_animate.swiperAnimate;
// Vue.prototype.$clearSwiperAnimate = siwper_animate.clearSwiperAnimate


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
