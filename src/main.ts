import Vue from "vue";
import App from "./index.vue";
import router from "./router/index";
import store from "./store/index";

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});