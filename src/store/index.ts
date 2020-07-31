import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'

import rootStore from './root.store'

import user from './modules/user.module'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
  ...rootStore,
  modules: {
    user
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store
