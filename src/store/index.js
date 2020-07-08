import Vue from "vue";
import Vuex, { createLogger } from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import state from "./state";

import user from "./modules/user.module";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    user,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

export default store;
