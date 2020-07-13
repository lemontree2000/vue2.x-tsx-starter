import Vue from 'vue'
import App from './index.vue'
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

import router from './router/index'
import store from './store/index'

// Vue.use(Antd)

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
