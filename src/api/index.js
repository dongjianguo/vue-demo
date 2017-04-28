import Vue from 'vue'
import axios from 'axios'

// api
Vue.use(axios)
  // prod
  // Vue.http.options.root = 'https://fixbay.cn/api/v1'
  /**
   * dev
   * http://apitest.fixbay.cn/api/v1
   * More detail: proxyTable of config/index.js
   */
Vue.http.options.root = '/api/v1'

// Interceptors
Vue.http.interceptors.push(function (request, next) {
  next(function (response) {
  })
})

export default axios
