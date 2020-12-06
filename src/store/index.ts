import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    a: '111'
  },
  mutations: {
    fetchA(state) {
      return state.a=JSON.parse(window.localStorage.getItem('aRecord') || state.a)
    },
    saveA(state, x) {
      window.localStorage.setItem('aRecord', JSON.stringify(x))
    }
  },
  actions: {
  },
  modules: {
  }
})
