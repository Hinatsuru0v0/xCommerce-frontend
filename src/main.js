import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Cookies from "js-cookie";
import "./plugins/element.js";

Vue.config.productionTip = false;
Vue.prototype.$AJAX = axios;
Vue.prototype.$PUBILC_URL = process.env.BASE_URL;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + " - Apple Store";
  }
  if (!store.state.isLogin) {
    let cookieState = Cookies.get("loginState");
    let cookieUserInfo = {};
    if (cookieState != null) {
      axios
        .get(`http://localhost:8099/user`, {
          params: {
            id: cookieState
          }
        })
        .then(res => {
          cookieUserInfo = res.data[0];
          if (cookieUserInfo.id === cookieState) {
            store.commit("loginAccount", cookieUserInfo);
          }
        });
    }
  }
  Vue.nextTick(() => {
    next();
  });
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
