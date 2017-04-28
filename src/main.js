// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './css/common.styl'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})