// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

// import './common/stylus/index.styl'

Vue.use(VueResource)
Vue.use(VueRouter)

let router = new VueRouter({
  linkActiveClass: 'active',
  base: __dirname,
  routes: [
    { path: '/', component: seller },
    { path: '/seller', component: seller },
    { path: '/goods', component: goods },
    { path: '/ratings', component: ratings }
  ]
})
// router.push('/seller')


/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  render: h => h(App)
}).$mount('#app');