import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: JSON.parse(localStorage.getItem('token')) || null,
    date: localStorage.getItem('date') || null
  },
  mutations: {
    login(state, token){
      localStorage.setItem('token', JSON.stringify(token));
      state.token = token;
    },
    logout(state){
      localStorage.removeItem('token');
      state.token = null;
    },
    updateDate(state, date){
      localStorage.setItem('date', date);
      state.date = date;
    }
  },
  actions: {
  },
  modules: {
  }
})
