import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "./plugins/element.js";

Vue.config.productionTip = false;
Vue.prototype.$AJAX = axios;
Vue.prototype.$PUBILC_URL = process.env.BASE_URL;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
