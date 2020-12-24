import Vue from "vue";
import Vuex from "vuex";

import Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    loginUser: null
  },
  getters: {
    getCart(state) {
      return state.loginUser["cart"];
    },
    getOrderInfo(state) {
      return state.loginUser["order"];
    }
  },
  mutations: {
    loginAccount(state, val) {
      state.isLogin = true;
      state.loginUser = val;
      Cookies.set("loginState", state.loginUser.id, { expires: 1 });
    },
    logout(state) {
      state.isLogin = false;
      state.loginUser = null;
      Cookies.remove("loginState");
    },
    refreshUser(state, val) {
      state.loginUser = val;
    },
    setCart(state, val) {
      state.loginUser["cart"] = val;
    },
    setOrderInfo(state, val) {
      state.loginUser["order"] = val;
    }
  },
  actions: {},
  modules: {}
});
