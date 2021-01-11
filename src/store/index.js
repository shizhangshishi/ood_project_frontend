import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
  },
  mutations: {
    login(state, token) {
      localStorage.setItem('token', token);
      state.token = token;
    },
    logout(state) {
      // 移除token
      localStorage.removeItem('token');
      state.token = null;
    },
  },
  actions: {},
  modules: {}
});
