import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    loginUser: null
  },
  getters: {
    getShoppingBag(state) {
      return state.loginUser["shopping_bag"];
    }
  },
  mutations: {
    loginAccount(state, val) {
      state.isLogin = true;
      state.loginUser = val;
    },
    logout(state) {
      state.isLogin = false;
      state.loginUser = null;
    }
  },
  actions: {},
  modules: {}
});
